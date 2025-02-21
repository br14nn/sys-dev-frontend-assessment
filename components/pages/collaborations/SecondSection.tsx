"use client";

import CollabCard from "@/components/custom/CollabCard";
import { Container } from "@/components/ui/container";
import getCollaborators from "@/REST/getCollaborators";
import { useEffect, useState } from "react";

const SecondSection = () => {
  const [collaberData, setCollaberData] = useState<ICollaber[]>([]);

  useEffect(() => {
    getCollaborators()
      .then((data) => setCollaberData(data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <section className="flex min-h-screen w-full items-start justify-center bg-sky-200">
      <Container>
        <div className="grid w-full max-w-[400px] grid-cols-1 gap-8 py-8 sm:max-w-none sm:grid-cols-2 lg:py-16 xl:grid-cols-3">
          {collaberData.map((value) => (
            <CollabCard
              key={value.id}
              collaberPFP={value.avatar}
              imageAlt={`${value.first_name} ${value.last_name} PFP`}
              collaberID={value.id}
              collaberFirstname={value.first_name}
              collaberLastname={value.last_name}
              collaberEmail={value.email}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SecondSection;
