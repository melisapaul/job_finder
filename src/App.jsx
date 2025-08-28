import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import SearchBar from "./components/SearchBar/index";
import JobCard from "./components/JobCard/index";
import JobData from "./JobDummyData";
import { useEffect, useState } from "react";
JobData;
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(
      jobsRef,
      where("type", "==", jobCriteria.type),
      where("location", "==", jobCriteria.location),
      where("experience", "==", jobCriteria.experience),
      where("title", "==", jobCriteria.title),
      orderBy("postedOn", "desc")
    );
    const req = await getDocs(q);
    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />

      {customSearch && (
        <div className="w-full flex justify-center md:justify-end mb-2 px-2 sm:px-8">
          <button
            onClick={fetchJobs}
            className="bg-blue-500 px-8 py-2 rounded-md text-white font-semibold shadow hover:bg-blue-600 transition-all"
          >
            Clear Filter
          </button>
        </div>
      )}

      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;

