import { useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import {
  Card,
  Layout,
  Select,
  Descriptions,
  Tag,
  Typography,
  Space,
  Divider,
  Tabs,
  Empty,
} from "antd";
import type { TabsProps } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import data from "./data/info_fronteras.json";
import { motion } from "framer-motion";

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

// Tipos inferidos desde el JSON
type RootData = typeof data;
type CountryKey = keyof RootData;
type TradeRow = RootData[CountryKey][number];

interface ChartPoint {
  year: number;
  imports: number;
  exports: number;
  balance: number;
}

// JSON estático como constante de módulo
const rootData: RootData = data as RootData;

// Config del mapa y metadatos de cada relación
const COUNTRY_CONFIG: Record<
  CountryKey,
  {
    displayName: string;
    flagUrl: string;
    lat: number;
    lng: number;
    note?: string;
  }
> = {
  colombia_ecuador: {
    displayName: "Colombia – Ecuador",
    flagUrl: "https://flagcdn.com/w320/ec.png",
    lat: -1.83,
    lng: -78.18,
    note: "Relación comercial bilateral entre Colombia y Ecuador.",
  },
  "colombia-brasil": {
    displayName: "Colombia – Brasil",
    flagUrl: "https://flagcdn.com/w320/br.png",
    lat: -15.78,
    lng: -47.93,
    note: "Intercambio comercial con Brasil, un socio clave en Sudamérica.",
  },
  "colombia-peru": {
    displayName: "Colombia – Perú",
    flagUrl: "https://flagcdn.com/w320/pe.png",
    lat: -9.19,
    lng: -75.02,
    note: "Relación comercial andina entre Colombia y Perú.",
  },
  "colombia-panama": {
    displayName: "Colombia – Panamá",
    flagUrl: "https://flagcdn.com/w320/pa.png",
    lat: 8.54,
    lng: -80.78,
    note: "Relación comercial con Panamá, hub logístico en Centroamérica.",
  },
  "colombia-venezuela": {
    displayName: "Colombia – Venezuela",
    flagUrl: "https://flagcdn.com/w320/ve.png",
    lat: 6.42,
    lng: -66.59,
    note: "Relación bilateral histórica con Venezuela.",
  },
  norte_santander_venezuela: {
    displayName: "Norte de Santander – Venezuela",
    flagUrl: "https://flagcdn.com/w320/ve.png",
    lat: 7.9,
    lng: -72.5,
    note: "Relación comercial específica del departamento de Norte de Santander con Venezuela.",
  },
};

type CountryConfig = (typeof COUNTRY_CONFIG)[CountryKey];

// Icono de bandera para el mapa
const createFlagIcon = (flagUrl: string, isSelected: boolean) =>
  L.divIcon({
    html: `
      <div style="
        transform: translate(-50%, -50%);
        ${isSelected ? "border: 2px solid #1677ff; border-radius: 4px;" : ""}
        background: white;
        padding: 2px;
        box-shadow: 0 0 4px rgba(0,0,0,0.3);
      ">
        <img
          src="${flagUrl}"
          style="width: 32px; height: 20px; border-radius: 2px; display: block;"
        />
      </div>
    `,
    className: "",
    iconSize: [32, 20],
    iconAnchor: [16, 10],
  });

function parseMoney(value: string | undefined): number {
  if (!value) return 0;

  let numeric = value.replace(/[^0-9,.-]/g, "");

  if (numeric.includes(".") && numeric.includes(",")) {
    numeric = numeric.replace(/\./g, "").replace(",", ".");
  } else if (numeric.includes(",") && !numeric.includes(".")) {
    numeric = numeric.replace(",", ".");
  }

  const n = parseFloat(numeric);
  return isNaN(n) ? 0 : n;
}

function buildChartData(rows: TradeRow[]): ChartPoint[] {
  return rows
    .filter((row) => row.importaciones_millones && row.exportaciones_millones)
    .map((row) => {
      const imports = parseMoney(row.importaciones_millones);
      const exports = parseMoney(row.exportaciones_millones);
      const balance = imports - exports;

      return {
        year: row.año,
        imports,
        exports,
        balance,
      };
    });
}

/* ---------------- CONFIG DE IMÁGENES DE PRODUCTOS ---------------- */

interface ProductImage {
  id: string;
  name: string;
  imageUrl: string;
}

const PRODUCT_IMAGES: Record<
  CountryKey,
  Partial<
    Record<
      number,
      {
        imports: ProductImage[];
        exports: ProductImage[];
      }
    >
  >
> = {
  colombia_ecuador: {
    2014: {
      imports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "marisco",
          name: "Preparaciones de carne, de pescado, de crustáceos, moluscos u otros invertebrados acuáticos, o…",
          imageUrl: "/images/mariscos.avif",
        },
        {
          id: "aceite",
          name: "Grasas y aceites animales, vegetales o microbianos y sus productos de degradación; grasas comestibles preparadas",
          imageUrl: "/images/aceites.jpg",
        },
      ],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
      ],
    },
    2015: {
      imports: [],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
      ],
    },
    2016: {
      imports: [],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
      ],
    },
    2017: {
      imports: [],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
      ],
    },
    2018: {
      imports: [],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2019: {
      imports: [],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2020: {
      imports: [],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2021: {
      imports: [],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
      ],
    },
    2022: {
      imports: [],
      exports: [
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
        {
          id: "farmaceutico",
          name: "Productos farmaceuticos",
          imageUrl: "/images/farmaceuticos.jpg",
        },
      ],
    },
    2023: {
      imports: [],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
    2024: {
      imports: [],
      exports: [
        {
          id: "mineral",
          name: "Combustibles minerales, aceites minerales y productos de su destilación; sustancias bituminosas; minerales...",
          imageUrl: "/images/combustible_mineral.avif",
        },
        {
          id: "vehiculo",
          name: "Vehículos distintos del material rodante ferroviario o tranviario, y sus partes y accesorios.",
          imageUrl: "/images/vehiculo.jpg",
        },
        {
          id: "plastico",
          name: "Plásticos y sus manufacturas.",
          imageUrl: "/images/plasticos.jpg",
        },
      ],
    },
  },
  "colombia-brasil": {
    2014: {
      imports: [
        {
          id: "carne_br",
          name: "Carne y despojos",
          imageUrl: "/images/products/carne-brasil.png",
        },
      ],
      exports: [
        {
          id: "relojes",
          name: "Relojes",
          imageUrl: "/images/products/relojes.png",
        },
      ],
    },
  },
  "colombia-peru": {},
  "colombia-panama": {},
  "colombia-venezuela": {},
  norte_santander_venezuela: {},
};

/* ---------------------- COMPONENTES UI REUTILIZABLES ---------------------- */

interface CountryMapProps {
  selectedCountryKey: CountryKey;
  onCountryClick: (key: CountryKey) => void;
}

const CountryMap = ({
  selectedCountryKey,
  onCountryClick,
}: CountryMapProps) => {
  return (
    <MapContainer
      center={[4.0, -72.0]} // Colombia aprox
      zoom={4}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {(Object.keys(COUNTRY_CONFIG) as CountryKey[]).map((key) => {
        const c = COUNTRY_CONFIG[key];
        const isSelected = key === selectedCountryKey;

        return (
          <Marker
            key={key}
            position={[c.lat, c.lng]}
            icon={createFlagIcon(c.flagUrl, isSelected)}
            eventHandlers={{
              click: () => onCountryClick(key),
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              <span>{c.displayName}</span>
            </Tooltip>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

interface YearSelectorProps {
  years: number[];
  selectedYear: number | null;
  onChange: (year: number) => void;
}

const YearSelector = ({ years, selectedYear, onChange }: YearSelectorProps) => {
  if (!years.length) return null;

  return (
    <div style={{ marginBottom: 16 }}>
      <Text strong style={{ marginRight: 8 }}>
        Año:
      </Text>
      <Select<number>
        style={{ minWidth: 160 }}
        value={selectedYear ?? undefined}
        onChange={onChange}
      >
        {years.map((year) => (
          <Option key={year} value={year}>
            {year}
          </Option>
        ))}
      </Select>
    </div>
  );
};

interface CountrySummaryProps {
  selectedRow?: TradeRow;
}

const CountrySummary = ({ selectedRow }: CountrySummaryProps) => {
  if (!selectedRow) {
    return (
      <Text type="secondary">
        No hay información disponible para el año seleccionado.
      </Text>
    );
  }

  return (
    <Descriptions column={1} size="small" bordered>
      <Descriptions.Item label="Importaciones (millones)">
        {selectedRow.importaciones_millones || "Sin dato"}
      </Descriptions.Item>
      <Descriptions.Item label="Exportaciones (millones)">
        {selectedRow.exportaciones_millones || "Sin dato"}
      </Descriptions.Item>
      <Descriptions.Item label="Saldo comercial (texto)">
        <Space>
          {selectedRow.saldo_comercial_millones || "Sin dato"}
          {selectedRow.saldo_comercial_millones
            ?.toLowerCase()
            .includes("superávit") && <Tag color="green">Superávit</Tag>}
          {selectedRow.saldo_comercial_millones
            ?.toLowerCase()
            .includes("déficit") && <Tag color="red">Déficit</Tag>}
        </Space>
      </Descriptions.Item>

      {selectedRow.productos_exporta && (
        <Descriptions.Item label="Productos que exporta Colombia">
          {selectedRow.productos_exporta}
        </Descriptions.Item>
      )}

      {selectedRow.sectores_exportacion && (
        <Descriptions.Item label="Sectores de exportación">
          {selectedRow.sectores_exportacion}
        </Descriptions.Item>
      )}

      {selectedRow.importacion_productos && (
        <Descriptions.Item label="Productos que importa Colombia">
          {selectedRow.importacion_productos}
        </Descriptions.Item>
      )}

      {selectedRow.sectores_exporta && (
        <Descriptions.Item label="Sectores de los que importamos">
          {selectedRow.sectores_exporta}
        </Descriptions.Item>
      )}

      {selectedRow.destinos_exportaciones && (
        <Descriptions.Item label="Destinos de exportación">
          {selectedRow.destinos_exportaciones}
        </Descriptions.Item>
      )}
    </Descriptions>
  );
};

interface TradeChartsProps {
  data: ChartPoint[];
}

const TradeCharts = ({ data }: TradeChartsProps) => {
  if (!data.length) {
    return (
      <Text type="secondary">
        No hay datos suficientes para graficar importaciones, exportaciones y
        saldo comercial.
      </Text>
    );
  }

  return (
    <>
      <Title level={5} style={{ marginBottom: 8 }}>
        Importaciones vs Exportaciones por año
      </Title>
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis
              tickFormatter={(v) =>
                v.toLocaleString("es-CO", { maximumFractionDigits: 0 })
              }
            />
            <RechartsTooltip
              formatter={(value: any) =>
                (value as number).toLocaleString("es-CO", {
                  maximumFractionDigits: 2,
                })
              }
              labelFormatter={(label) => `Año: ${label}`}
            />
            <Legend />
            <Bar dataKey="imports" name="Importaciones" fill="#8884d8" />
            <Bar dataKey="exports" name="Exportaciones" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Divider />

      <Title level={5} style={{ marginBottom: 8 }}>
        Saldo comercial (Importaciones - Exportaciones)
      </Title>
      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis
              tickFormatter={(v) =>
                v.toLocaleString("es-CO", { maximumFractionDigits: 0 })
              }
            />
            <RechartsTooltip
              formatter={(value: any) =>
                (value as number).toLocaleString("es-CO", {
                  maximumFractionDigits: 2,
                })
              }
              labelFormatter={(label) => `Año: ${label}`}
            />
            <ReferenceLine y={0} stroke="#000" />
            <Legend />
            <Bar dataKey="balance" name="Saldo (Imp - Exp)" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

/* ---------------- TAB DE PRODUCTOS (IMPORT / EXPORT) ---------------- */

interface ProductsTabProps {
  countryKey: CountryKey;
  selectedYear: number | null;
  selectedRow?: TradeRow;
}

const ProductsTab = ({
  countryKey,
  selectedYear,
  selectedRow,
}: ProductsTabProps) => {
  if (!selectedYear) {
    return <Text>Selecciona un año para ver los productos.</Text>;
  }

  const configByYear = PRODUCT_IMAGES[countryKey] || {};
  const yearConfig = configByYear[selectedYear];

  const renderGrid = (items?: ProductImage[], fallbackText?: string) => {
    if (!items || items.length === 0) {
      if (fallbackText) {
        return (
          <div>
            <Text
              type="secondary"
              style={{ display: "block", marginBottom: 8 }}
            >
              No hay imágenes configuradas para este año. Descripción textual:
            </Text>
            <Text>{fallbackText}</Text>
          </div>
        );
      }
      return (
        <Empty description="No hay productos configurados para este año" />
      );
    }

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 16,
        }}
      >
        {items.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              border: "1px solid #f0f0f0",
              borderRadius: 12,
              padding: 10,
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              minHeight: 240,
            }}
          >
            {/* Contenedor de imagen: protagonista total */}
            <motion.div
              style={{
                flexGrow: 1,
                borderRadius: 10,
                overflow: "hidden",
                background: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 8,
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src={p.imageUrl}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: 210,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </motion.div>

            {/* Texto pequeñito debajo */}
            <div style={{ textAlign: "center" }}>
              <Text style={{ fontSize: 13, fontWeight: 500 }}>{p.name}</Text>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  const innerItems: TabsProps["items"] = [
    {
      key: "imports",
      label: "Importaciones",
      children: renderGrid(
        yearConfig?.imports,
        selectedRow?.importacion_productos
      ),
    },
    {
      key: "exports",
      label: "Exportaciones",
      children: renderGrid(yearConfig?.exports, selectedRow?.productos_exporta),
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="imports" items={innerItems} />
    </div>
  );
};

/* ----------------------- TAB DE AYUDA ----------------------- */

const HelpTab = () => (
  <div>
    <Title level={5}>Cómo usar el mapa y el panel</Title>
    <ul style={{ paddingLeft: 20, margin: 0 }}>
      <li>Haz clic en una bandera del mapa para cambiar de país.</li>
      <li>
        Usa el selector de año para ver el detalle del año seleccionado en la
        pestaña <strong>Resumen</strong>.
      </li>
      <li>
        Revisa la pestaña <strong>Gráficos</strong> para analizar la evolución
        de importaciones, exportaciones y saldo comercial en el tiempo.
      </li>
      <li>
        En la pestaña <strong>Productos</strong> podrás ver, por año, los
        principales productos importados y exportados representados con
        imágenes.
      </li>
    </ul>
  </div>
);

/* ---------------- PANEL PRINCIPAL POR PAÍS ---------------- */

interface CountryPanelProps {
  config: CountryConfig;
  years: number[];
  selectedYear: number | null;
  onYearChange: (year: number) => void;
  selectedRow?: TradeRow;
  chartData: ChartPoint[];
  countryKey: CountryKey;
}

const CountryPanel = ({
  config,
  years,
  selectedYear,
  onYearChange,
  selectedRow,
  chartData,
  countryKey,
}: CountryPanelProps) => {
  const items: TabsProps["items"] = [
    {
      key: "summary",
      label: "Resumen",
      children: <CountrySummary selectedRow={selectedRow} />,
    },
    {
      key: "charts",
      label: "Gráficos",
      children: <TradeCharts data={chartData} />,
    },
    {
      key: "products",
      label: "Productos",
      children: (
        <ProductsTab
          countryKey={countryKey}
          selectedYear={selectedYear}
          selectedRow={selectedRow}
        />
      ),
    },
    {
      key: "help",
      label: "Ayuda",
      children: <HelpTab />,
    },
  ];

  return (
    <Card
      bordered
      title={
        <Space align="center">
          <img
            src={config.flagUrl}
            alt={config.displayName}
            style={{
              width: 32,
              height: 20,
              objectFit: "cover",
              borderRadius: 4,
              border: "1px solid #ddd",
            }}
          />
          <span>{config.displayName}</span>
        </Space>
      }
    >
      {config.note && (
        <Text type="secondary" style={{ display: "block", marginBottom: 8 }}>
          {config.note}
        </Text>
      )}

      {/* Selector de año común a todas las tabs */}
      <YearSelector
        years={years}
        selectedYear={selectedYear}
        onChange={onYearChange}
      />

      <Tabs defaultActiveKey="summary" items={items} />
    </Card>
  );
};

/* --------------------------------- APP --------------------------------- */

export const App = () => {
  const [selectedCountryKey, setSelectedCountryKey] =
    useState<CountryKey>("colombia_ecuador");

  // Datos del país seleccionado
  const countryData: TradeRow[] = rootData[selectedCountryKey];

  // Año seleccionado (por defecto, último año de colombia_ecuador)
  const [selectedYear, setSelectedYear] = useState<number | null>(() => {
    const initialRows = rootData["colombia_ecuador"];
    return initialRows.length ? initialRows[initialRows.length - 1].año : null;
  });

  // Fila correspondiente al año seleccionado
  const selectedRow: TradeRow | undefined =
    selectedYear == null
      ? undefined
      : countryData.find((row) => row.año === selectedYear);

  const handleCountryClick = (key: CountryKey) => {
    setSelectedCountryKey(key);

    const rows = rootData[key];
    if (rows.length > 0) {
      const lastYear = rows[rows.length - 1].año;
      setSelectedYear(lastYear);
    } else {
      setSelectedYear(null);
    }
  };

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  const config = COUNTRY_CONFIG[selectedCountryKey];

  // Listado de años y datos para gráficos
  const years = countryData.map((row) => row.año);
  const chartData = buildChartData(countryData);

  return (
    <Layout style={{ height: "100vh" }}>
      <Content>
        <div style={{ display: "flex", height: "100%", minHeight: 0 }}>
          {/* MAPA (SIEMPRE VISIBLE) */}
          <div style={{ flex: "2 1 0", minWidth: 0 }}>
            <CountryMap
              selectedCountryKey={selectedCountryKey}
              onCountryClick={handleCountryClick}
            />
          </div>

          {/* PANEL DE INFORMACIÓN (Ant Design) */}
          <div
            style={{
              flex: "1 1 0",
              minWidth: 320,
              maxWidth: 520,
              padding: 16,
              overflowY: "auto",
              borderLeft: "1px solid #f0f0f0",
            }}
          >
            <CountryPanel
              config={config}
              years={years}
              selectedYear={selectedYear}
              onYearChange={handleYearChange}
              selectedRow={selectedRow}
              chartData={chartData}
              countryKey={selectedCountryKey}
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
};
