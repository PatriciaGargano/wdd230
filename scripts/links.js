const baseURL = "https://patriciagargano.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(weeks) {
    const activitiesList = document.getElementById('activities');
    activitiesList.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        weekItem.textContent = week.week;

        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const linkItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `${baseURL}${link.url}`;
            anchor.textContent = link.title;
            linkItem.appendChild(anchor);
            linksList.appendChild(linkItem);
        });

        activitiesList.appendChild(weekItem);
        activitiesList.appendChild(linksList);
    });
}

getLinks(); // Call the function to load links
