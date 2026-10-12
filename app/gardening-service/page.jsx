// import GardeningService from "@/components/GardeningService";

// export const metadata = {
//   title: "Gardening Service | Monthly & Annual Care",
// //   description:"Monthly and annual plant care plans — Essential, Enhanced, Bloom and Signature Care.",
// };

// export default function GardeningServicePage() {
//   return <GardeningService />;
// }


import { Suspense } from "react";
import GardeningService from "@/components/GardeningService";

export const metadata = {
  title: "Gardening Service | Monthly & Annual Care",
  // description:
  //   "Monthly and annual plant care plans — Essential, Enhanced, Bloom and Signature Care.",
};

export default function GardeningServicePage() {
  return (
    <Suspense fallback={<div>Loading gardening services...</div>}>
      <GardeningService />
    </Suspense>
  );
}
