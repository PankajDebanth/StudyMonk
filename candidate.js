document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector("#search-btn");
  const locationSelect = document.querySelector("#location");
  const jobRoleSelect = document.querySelector("#job-role");
  const candidateList = document.querySelector("#candidate-list");
  const rankingList = document.querySelector("#ranking-list");
  let selectedCandidates = [];

  searchBtn.addEventListener("click", () => {
    const selectedLocation = locationSelect.value;
    const selectedJobRole = jobRoleSelect.value;

    fetchCandidates(selectedLocation, selectedJobRole);
  });

  function fetchCandidates(location, jobRole) {
    const candidates = [
      { name: "John Doe", location: "New York", jobRole: "Software Engineer" },
      { name: "Jane Smith", location: "London", jobRole: "HR Manager" },
      { name: "David Johnson", location: "New York", jobRole: "HR Manager" },
      {
        name: "Emily Williams",
        location: "London",
        jobRole: "Software Engineer",
      },
      { name: "Ravi Kumar", location: "Delhi", jobRole: "Software Engineer" },
      { name: "Priya Patel", location: "Mumbai", jobRole: "HR Manager" },
      {
        name: "Amit Sharma",
        location: "Bangalore",
        jobRole: "Software Engineer",
      },
      { name: "Sneha Gupta", location: "Delhi", jobRole: "HR Manager" },
      {
        name: "Vikram Singh",
        location: "Mumbai",
        jobRole: "Software Engineer",
      },
      { name: "Neha Kapoor", location: "Bangalore", jobRole: "HR Manager" },
      {
        name: "Manish Tiwari",
        location: "Delhi",
        jobRole: "Software Engineer",
      },
      { name: "Shweta Choudhary", location: "Mumbai", jobRole: "HR Manager" },
      {
        name: "Rahul Mehta",
        location: "Bangalore",
        jobRole: "Software Engineer",
      },
      { name: "Pooja Verma", location: "Delhi", jobRole: "HR Manager" },
      { name: "Ajay Singh", location: "Mumbai", jobRole: "Software Engineer" },
      { name: "Deepika Patel", location: "Bangalore", jobRole: "HR Manager" },
      {
        name: "Gaurav Mishra",
        location: "Delhi",
        jobRole: "Software Engineer",
      },
      { name: "Anjali Gupta", location: "Mumbai", jobRole: "HR Manager" },
      {
        name: "Rajesh Kumar",
        location: "Bangalore",
        jobRole: "Software Engineer",
      },
      { name: "Preeti Sharma", location: "Delhi", jobRole: "HR Manager" },
    ];

    const filteredCandidates = candidates.filter((candidate) => {
      return (
        (location === "" || candidate.location === location) &&
        (jobRole === "" || candidate.jobRole === jobRole)
      );
    });

    displayCandidates(filteredCandidates);
  }

  function displayCandidates(candidates) {
    candidateList.innerHTML = "";

    if (candidates.length === 0) {
      const listItem = document.createElement("li");
      listItem.textContent = "No candidates found.";
      candidateList.appendChild(listItem);
    } else {
      candidates.forEach((candidate) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${candidate.name} - ${candidate.jobRole}, ${candidate.location}`;
        listItem.addEventListener("click", () => {
          addCandidateToRanking(candidate);
        });
        candidateList.appendChild(listItem);
      });
    }
  }

  function addCandidateToRanking(candidate) {
    if (!selectedCandidates.includes(candidate)) {
      selectedCandidates.push(candidate);

      const listItem = document.createElement("li");
      listItem.textContent = `${candidate.name} - ${candidate.jobRole}, ${candidate.location}`;
      listItem.addEventListener("click", () => {
        removeCandidateFromRanking(candidate);
      });
      rankingList.appendChild(listItem);
    }
  }

  function removeCandidateFromRanking(candidate) {
    const index = selectedCandidates.indexOf(candidate);
    if (index !== -1) {
      selectedCandidates.splice(index, 1);

      const listItems = rankingList.getElementsByTagName("li");
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].textContent.includes(candidate.name)) {
          rankingList.removeChild(listItems[i]);
          break;
        }
      }
    }
  }
});
