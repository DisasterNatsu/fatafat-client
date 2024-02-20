import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TodayTable = ({ data }: { data?: LatestUpdateDataType }) => {
  // set the array of keys

  let arr: Array<keyof LatestUpdateDataType> = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
  ];

  return (
    <div>
      <Table className="cursor-default">
        <TableHeader className="bg-green-400">
          <TableRow>
            {arr?.map((_item, index) => (
              <TableHead
                className="w-[200px] text-black font-semibold text-center h-8 dark:border-black border-x-2"
                key={index}
              >
                {index + 1}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            {data
              ? arr.map((key, index) => (
                  <TableCell
                    className="text-center dark:border-black border-x-2 px-3"
                    key={index}
                  >
                    <p>
                      {data[key]
                        ? JSON.parse(data[key]!)?.gameResultPatti
                        : "--"}
                    </p>
                    <hr />
                    <p>
                      {data[key]
                        ? JSON.parse(data[key]!).gameResultNumber
                        : "--"}
                    </p>
                  </TableCell>
                ))
              : arr.map((item, index) => (
                  <TableCell
                    className="text-center dark:border-black border-x-2 px-3"
                    key={index}
                  >
                    <p>--</p>
                    <hr />
                    <p>--</p>
                  </TableCell>
                ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TodayTable;
