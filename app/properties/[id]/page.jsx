"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/request";

import PropertyHeaderImage from "@/components/PropertyHeaderImage";

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;

      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);
  if (!property && !loading) {
    return (
      <h1 className="text-center txt-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }
  return (
    <>
      {!loading && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
        </>
      )}
    </>
  );
};

export default PropertyPage;
