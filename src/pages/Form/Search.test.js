// React -------------------
import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// Component ---------------
import Search from "./Search"

jest.mock("axios")

describe("Search", () => {
    // test("Fetch Success", async () => {
    //   const stories = [
    //     {objectID: "1", title: "hello"},
    //     {objectID: "2", title: "React"}
    //   ]

    //   axios.get.mockImplementationOnce(() => {
    //     Promise.resolve({data: { hits: stories }})
    //   })

    //   render(<Search />)

    //   await act(async () => {
    //     userEvent.click(screen.getByRole('button'))
    //   })

    //   const items = await screen.findAllByRole('listitem')

    //   expect(items).toHaveLength(2);
    // })
  
    test("Fetch Fails", async () => {
      axios.get.mockImplementationOnce(() => {
        Promise.reject(new error());
      })

      render(<Search />);

      await act(async () => {
        userEvent.click(screen.getByRole("button"));
      })

      const items = await screen.findByText("Ada yang error ...");

      expect(items).toBeInTheDocument();
    })
  });