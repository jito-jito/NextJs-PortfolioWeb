import React from "react";
import PinnedRepo from "../../components/PinnedRepo/PinnedRepo";

export default function Github({
  pinnedRepos,
  activity
}) {

    return(
      <>
          <section className="page-container github" id="gitHub">
            <h1 className="github-title">GitHub - Pinned Repos 🚀</h1>
            <section className="github-pinnedContainer">
              { pinnedRepos.nodes.map(repo => (
                  <PinnedRepo
                    key={repo.name}
                    name={repo.name}
                    description={repo.description}
                    languages={repo.languages}
                    gitHubUrl={repo.url}
                    homepageUrl={repo.homepageUrl}
                    updatedAt={repo.updatedAt}
                  />
              ))}
              
            </section>
          </section>
      </>
    )
}