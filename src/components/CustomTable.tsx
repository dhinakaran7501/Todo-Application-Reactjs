import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

interface CustomTableProps {
  columns: ColumnsType<any>;
  transformedData: any[];
}

export default function CustomTable({
  columns,
  transformedData,
}: CustomTableProps) {
  return (
    <div className="p-4 bg-transparent text-[var(--text-color)] rounded-lg">
      <Table
        columns={columns}
        dataSource={transformedData}
        pagination={{
          pageSize: 8,
          className: "custom-pagination",
        }}
        className="custom-table border border-[var(--border-color)] rounded-lg"
      />
    </div>
  );
}
