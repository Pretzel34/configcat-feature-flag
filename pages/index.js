import Head from "next/head";
import Image from "next/image";
import "../styles/Home.module.css";
import * as configcat from "configcat-js-ssr";

// Page Component
export default function Home({ data, myFeatureFlag }) {
  // Extract the required user details
  const firstName = data[0].name.first;
  const lastName = data[0].name.last;
  const image = data[0].picture.large;
  const gender = data[0].gender;
  const location = data[0].location.country;

  // Page Template
  return (
    <>
      {myFeatureFlag && (
        <div className="card">
          <img src={image} className={gender} />
          <h2>{`${firstName} ${lastName}`}</h2>
          <p>
            <span>Gender: </span> {gender}
          </p>
          <p>
            <span>Location: </span>
            {location}
          </p>
        </div>
      )}
      {!myFeatureFlag && <p>Feature has been toggled off</p>}
    </>
  );
}

// This runs on the server on each request
export async function getServerSideProps() {
  // Initialize ConfigCatClient with your SDK Key:
  const configCatClient = configcat.createClient(
    "clXbCNkpkkCFmsUDqd7tQg/9BSuQ-ypg0GQWVks6497Ng"
  );

  // Check the state of the feature flag
  const myFeatureFlag = await configCatClient.getValueAsync(
    "myFeatureFlag",
    false
  );

  // Fetch random user data from external API
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();

  // Return flag's state and dat to page via props
  return { props: { myFeatureFlag, data: data.results } };
}
