// React ------------------------------------------------------------
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// Component --------------------------------------------------------
import NameForm from "./FormCoding";

describe("NameForm", () => {
    test("Render FromCoding Component", () => {
        render(<NameForm/>)

        expect(screen.getByText(/Pendaftaran Peserta Coding Bootcamp/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Nama Lengkap/i)).toBeInTheDocument();
    })

    // Test For right input value -----------------
    test("All Input Text", () => {
        render(<NameForm/>)
        fireEvent.input(
            screen.getByRole("textbox", {name: /nama lengkap/i}), 
            {target: {value: "Rizkyyy"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /email/i}), 
            {target: {value: "rizky@mail.com"}}
        )
        fireEvent.input(
            screen.getByRole("spinbutton", {name: /no handphone/i}), 
            {target: {value: parseInt("089089089089")}}
        )

        expect(screen.getByLabelText(/nama lengkap/i)).toHaveValue("Rizkyyy")
        expect(screen.getByLabelText(/email/i)).toHaveValue("rizky@mail.com")
        expect(screen.getByLabelText(/no handphone/i)).toHaveValue(parseInt("089089089089"))
    })

    //test for wrong input value -------------------------------
    test("Wrong Input Value", () => {
        render(<NameForm/>)
        fireEvent.input( 
            screen.getByRole("textbox", {name: /nama lengkap/i}), 
            {target: {value: "Rizky007"}}
        )
        fireEvent.input( 
            screen.getByRole("textbox", {name: /email/i}), 
            {target: {value: "rizkymail.com"}}
        )
        fireEvent.input( 
            screen.getByRole("spinbutton", {name: /no handphone/i}), 
            {target: {value: "089089"}}
        )


        expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument();
        expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
        expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
    })

    //test for reset button fired ----------------------------------
    test("Reset Button Fired", () => {
        render(<NameForm />);
        fireEvent.click(
            screen.getByRole("button", { name: /reset/i }));

        expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("");
        expect(screen.getByLabelText(/Email/)).toHaveValue("");
        expect(screen.getByLabelText(/No Handphone/)).toHaveValue(null);
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)).toHaveValue("")
      });

})