"use client";

import React from "react";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

let arr: string[] = [
  "date",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
];

const Tables = ({ heading, refresh, data }: TablePropType) => {
  const Router = useRouter();

  const handleRefresh = () => {
    return Router.refresh();
  };

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
            {arr?.map((_item, index) => (
              <TableHead
                className="w-[200px] text-black font-semibold text-center h-8 dark:border-black border-x-2"
                key={index}
              >
                {index === 0 ? "Date" : index}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {!data.displayDashes ? (
            data.map(
              (
                item: { [x: string]: string },
                rowIndex: React.Key | null | undefined
              ) => (
                <TableRow key={rowIndex}>
                  {Object.keys(item).map((key, cellIndex) => {
                    let NumberResult = "--";
                    let PattiResult = "--";

                    if (
                      item[key] !== null &&
                      key !== "date" &&
                      key !== "createdAt"
                    ) {
                      const data = JSON.parse(item[key]);
                      NumberResult =
                        data.gameResultNumber && data.gameResultNumber;
                      PattiResult =
                        data.gameResultPatti && data.gameResultPatti;
                    }

                    // Only render the table cell if the key is not "date"
                    return (
                      key !== "createdAt" && (
                        <TableCell
                          key={cellIndex}
                          className="font-medium text-center"
                        >
                          {key !== "date" ? (
                            <>
                              <p>{PattiResult}</p>
                              <p>{NumberResult}</p>
                            </>
                          ) : (
                            <p>{item[key]}</p>
                          )}
                        </TableCell>
                      )
                    );
                  })}
                </TableRow>
              )
            )
          ) : (
            <TableRow>
              {arr?.map((_item, index) => {
                return (
                  <TableCell key={index} className="font-medium text-center">
                    {data.displayDashes && "--"}
                  </TableCell>
                );
              })}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {refresh && (
        <div className="flex justify-center mt-3">
          <button
            className="py-2 px-3 text-black bg-green-400 rounded-md hover:bg-green-500 font-semibold"
            onClick={handleRefresh}
          >
            Refresh
          </button>
        </div>
      )}
    </div>
  );
};

export default Tables;
