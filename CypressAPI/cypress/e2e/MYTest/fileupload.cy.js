describe("Upload image", () => {
    it("upload image", () => {

        const fileName = "Car.jpg";
        const method = "POST";
        const url = "https://postman-echo.com/post";
        const fileType = "image/jpeg";
        cy.fixture(fileName, "binary")
            .then((txtBin) => Cypress.Blob.binaryStringToBlob(txtBin))
            .then((blob) => {
                const formData = new FormData();
                formData.append("image_data", blob, fileName);
                formData.append("image_format", "jpeg");
                cy.form_request(method, url, formData, function (response) {
                    //cy.log(JSON.stringify(response))
                    expect(response.status).to.eq(200);
                    cy.log(JSON.stringify(response))
                }
                );
            })
    });
});