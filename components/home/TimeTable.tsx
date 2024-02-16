import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const TimeTable = () => {
  return (
    <div>
      <Table className="cursor-default border-b dark:border-white">
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-xl">
              1st Baji Draw Time (প্রথম বাজি খেলার সময়)
            </TableCell>
            <TableCell className="text-center w-[50%] text-xl">
              10:12 AM ( সকাল ১০:১২ )
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-xl">
              2nd Baji Draw Time (দ্বিতীয় বাজি খেলার সময়)
            </TableCell>
            <TableCell className="text-center w-[50%] text-xl">
              11:43 PM ( সকাল ১১:৪৩ )
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-xl">
              3rd Baji Draw Time (তৃতীয় বাজি খেলার সময়)
            </TableCell>
            <TableCell className="text-center w-[50%] text-xl">
              01:14 PM ( দুপুর ০১:১৪ )
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-xl">
              4th Baji Draw Time (চতুর্থ বাজি খেলার সময়)
            </TableCell>
            <TableCell className="text-center w-[50%] text-xl">
              02:45 PM ( দুপুর ০২:৪৫ )
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-xl">
              5th Baji Draw Time (পঞ্চম বাজি খেলার সময়)
            </TableCell>
            <TableCell className="text-center w-[50%] text-xl">
              04:16 PM ( বিকেল ০৪:১৬ )
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-xl">
              6th Baji Draw Time (ষষ্ঠ বাজি খেলার সময়)
            </TableCell>
            <TableCell className="text-center w-[50%] text-xl">
              05:47 PM ( বিকেল ০৫:৪৭ )
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-xl">
              7th Baji Draw Time (সপ্তম বাজি খেলার সময়)
            </TableCell>
            <TableCell className="text-center w-[50%] text-xl">
              07:18 PM ( সন্ধ্যা ০৭:১৮ )
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center border-r dark:border-r-white w-[50%] text-xl">
              8th Baji Draw Time (অষ্টম বাজি খেলার সময়)
            </TableCell>
            <TableCell className="text-center w-[50%] text-xl">
              08:49 PM ( রাত ০৮:৪৯ )
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TimeTable;
