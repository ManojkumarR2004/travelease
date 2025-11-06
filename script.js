
        function scrollToAbout() {
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
        }

        document.getElementById("contactForm").addEventListener("submit", function(e) {
            e.preventDefault();
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let msg = document.getElementById("message").value;

            if (name === "" || email === "" || msg === "") {
                alert("Please fill all fields!");
            } else {
                alert("Thank you for contacting TravTechie Technologies!");
                this.reset();
            }
        });

        
        function addEmployee() {
            let n = document.getElementById("empName").value;
            let a = document.getElementById("empAge").value;
            let s = document.getElementById("empSalary").value;
            let d = document.getElementById("empDept").value;

            if (n === "" || a === "" || s === "" || d === "") {
                alert("Please fill all fields!");
                return;
            }

            let table = document.querySelector("#empTable tbody");
            let row = document.createElement("tr");
            row.innerHTML = `<td>${n}</td><td>${a}</td><td>${s}</td><td>${d}</td>
                             <td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>`;
            table.appendChild(row);
            document.getElementById("empForm").reset();
        }
