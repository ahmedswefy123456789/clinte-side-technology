
        //q1
        
        function poor(){
            window.open("https://www.youtube.com","_blank","width=100px:height=100px");
        }   
        function close(){
            window.close();
        }
        setTimeout(close, 3000)

        q2
        alert(navigator.userAgent);
        q3
        if (navigator.onLine) {
            console.log('The browser is online.');
        } else {
            console.log('The browser is offline.');
        }

        q4
        setTimeout(() => {
            location.reload();
        }, 5000);

        //q5
        console.log(location.href)
        console.log(location.pathname)
        console.log(location.protocol)
        //q6
        console.log(history.back())
        console.log(history.forward())
        // q7
        let a=document.getElementById("lp")
        
        console.log(screen.width)
        console.log(screen.height)
          const screenSizeDiv = document.getElementById('screenSize');

        function updateScreenSize() {
            screenSizeDiv.textContent = `Screen width: ${window.innerWidth}px, Screen height: ${window.innerHeight}px`;
        }

        // Update on page load
        updateScreenSize();

        // Update on window resize
        window.addEventListener('resize', updateScreenSize);
        //q8
        const link = document.createElement('a');
        link.href = 'https://example.com';
        link.textContent = 'Original Link Text';

        // Create a cancel button
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel Change';

        // Append both to the document body
        document.body.appendChild(link);
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(document.createElement('br'));
        document.body.appendChild(cancelBtn);
           
        const timeoutId = setTimeout(() => {
            link.textContent = 'New Link Text';
        }, 2000);

        // Add event listener to cancel the change
        cancelBtn.addEventListener('click', () => {
            clearTimeout(timeoutId);
            alert('Link text change cancelled.');
        });

        //q9
         function updateTime() {
            const now = new Date();
            document.title = now.toLocaleTimeString();
        }

        
        const intervalId = setInterval(updateTime, 1000);

        updateTime();

        const stopBtn = document.getElementById('stopBtn');
        stopBtn.addEventListener('click', () => {
            clearInterval(intervalId);
            alert('Clock updates stopped.');
        });

        // q10
        const userConfirmed = confirm("Do you want to continue?");

        if (userConfirmed) {
        console.log("user said yes");
        } else {
        console.log("user said no");
        }
        // q11
        const ulE = document.querySelector('ul');
        console.log('childNodes:', ulE.childNodes); 
        console.log('children:', ulE.children);
        // q12
        function logBodyChildrenTags() {
        const bodyChildren = document.body.children;
        for (let child of bodyChildren) {
            console.log(child.tagName);
        }
        }
        logBodyChildrenTags();

        // q13
        function logElementChildNodes(parent) {
        for (let node of parent.childNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
            console.log(node);
            }
        }
        }
        const parent = document.querySelector('ul'); 
        logElementChildNodes(parent); 
        //q14
        const container = document.querySelector('ul');
        console.log('firstChild:', container.firstChild);           
        console.log('firstElementChild:', container.firstElementChild);
        //q15
        const le = document.querySelector('ul');
        const liElements = Array.from(le.children); // Only includes <li> elements (if no other elements exist inside)
        console.log(liElements);
        function logSiblingElements(elem) {
            const parent = elem.parentElement;
            for (let sibling of parent.children) {
                if (sibling !== elem) {
                console.log(sibling);
                }
            }
            }
            const item = document.querySelector('li'); // Example
            logSiblingElements(item);

            

            //Q18
            const ul1 = document.querySelector('ul');

            // Using nextSibling (may include text nodes)
            let node = ul1.firstChild;
            while (node) {
            console.log('nextSibling:', node);
            node = node.nextSibling;
            }
             let el = ul1.firstElementChild;
            while (el) {
            console.log('nextElementSibling:', el);
            el = el.nextElementSibling;
            }

            // Q19

            function countElementChildren(node) {
            let count = 0;
            for (let child of node.childNodes) {
                if (child.nodeType === Node.ELEMENT_NODE) {
                count++;
                }
            }
            return count;
            }
            const ul = document.querySelector('ul');
            console.log(countElementChildren(ul));

            // Q20
            function logFormInputs() {
            const form = document.forms[0];
            for (let input of form.elements) {
                if (input.name) {
                console.log(`Name: ${input.name}, Value: ${input.value}`);
                }
            }
            }
            logFormInputs();
            // Q21
            for (let form of document.forms) {
            console.log(form.name); // or form.getAttribute('name')
            }

            // Q22
            for (let img of document.images) {
            console.log(img.src);
            }
            // Q23
            function disableFormInputs(form) {
            for (let element of form.elements) {
                if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
                element.disabled = true;
                }
            }
            }
            const form = document.forms[0];
            disableFormInputs(form);
            // Q24
            const largeImages = Array.from(document.images).filter(img => img.width > 100);
            console.log(largeImages);

  

    