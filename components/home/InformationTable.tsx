import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const InformationTable = () => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-center text-black bg-green-400 cursor-default py-1">
        Kolkata FF Info Chart
      </h3>
      <Table className="cursor-default border dark:border-white border-t-0">
        <TableBody>
          {/* Real name */}
          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white w-[30%] text-sm">
              Real Name
            </TableCell>
            <TableCell className="text-center w-[70%] text-sm">
              Kolkata Fatafat | कोलकाता फटाफट | কলকাতা ফাতাফাত
            </TableCell>
          </TableRow>

          {/* Known as */}

          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white text-sm">
              Known As
            </TableCell>
            <TableCell className="text-center text-sm">
              Kolkata FF | কলকাতা এফএফ | कोलकाता एफएफ
            </TableCell>
          </TableRow>

          {/* Country/Region */}

          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white text-sm">
              Country | Region
            </TableCell>
            <TableCell className="text-center text-sm">India | Asia</TableCell>
          </TableRow>

          {/* Bid Range */}

          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white text-sm">
              Bid Range
            </TableCell>
            <TableCell className="text-center text-sm">
              ₹10 to ₹1 Lakh
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default InformationTable;
