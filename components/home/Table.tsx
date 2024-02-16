"use client";

import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const len = 8;

let arr: number[] = [];

for (let i = 0; i < len; i++) {
  arr.push(i + 1);
}

const Tables = ({ heading, refresh }: TablePropType) => {
  return (
    <div className="w-full">
      {heading && (
        <h1 className="my-1 text-xl font-semibold text-center text-black bg-green-400 cursor-default dark:border-black border-x-2">
          Previous Date
        </h1>
      )}
      <Table className="cursor-default">
        <TableHeader className="bg-green-400">
          <TableRow>
            {arr?.map((item, index) => (
              <TableHead
                className="w-[200px] text-black font-semibold text-center h-8 dark:border-black border-x-2"
                key={index}
              >
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            {arr?.map((item, index) => (
              <TableCell key={index} className="font-medium text-center">
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
      {refresh && (
        <div className="flex justify-center mt-3">
          <button className="py-2 px-3 text-black bg-green-400 rounded-md hover:bg-green-500 font-semibold">
            Refresh
          </button>
        </div>
      )}
    </div>
  );
};

export default Tables;
