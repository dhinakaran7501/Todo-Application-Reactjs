import { DashboardCardProps } from "../@types/component";

export default function DashboardCard({
  title,
  count,
  icon,
  bgColor = "bg-gray-900",
}: DashboardCardProps) {
  return (
    <div
      className={`${bgColor} cursor-pointer text-white rounded-lg shadow-md p-4 py-6 flex justify-between items-center w-full`}
    >
      <div>
        <h3 className="text-2xl font-bold">{count}</h3>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
      <div className="text-3xl text-red-500">{icon}</div>
    </div>
  );
}
