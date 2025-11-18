import type { ColumnDef } from "@tanstack/react-table";
import { DataTableBadge } from "@/components/layout/data-table-badge";
import { FormattedNumber, IntlProvider } from "react-intl";
import type { OrderDTO } from "../../dtos/order.dto";
export const orderColumns: ColumnDef<OrderDTO>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "createdAt",
    header: "Data Pedido",
    cell: ({ row }) => {
      const order = row.original;

      return <p>{new Date(order.createdAt).toLocaleDateString()}</p>;
    },
  },
  {
    accessorKey: "customer.name",
    header: "Nome Cliente",
  },
  {
    accessorKey: "total",
    header: "Total",

    cell: ({ row }) => {
      const order = row.original;

      return (
        <IntlProvider locale="pt-BR">
          <FormattedNumber
            value={order.total}
            style="currency"
            currency="BRL"
          />
        </IntlProvider>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const order = row.original;

      return <DataTableBadge status={order.status} />;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const order = row.original;

      return (
        <div className="flex justify-end mr-4">
          <DataTableBadge status={order.id!} />
        </div>
      );
    },
  },
];