fetch("../data/unit_data/arbook/data.json")
.then(response => response.json())
.then(data => console.log("hello from fetch of arbook 2023", data));