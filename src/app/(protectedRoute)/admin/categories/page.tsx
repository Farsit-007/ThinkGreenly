import { LoaderCircle } from "lucide-react";
import { Suspense } from "react";
import AllCategoriesModule from "./_components/AllCategoriesModule";


const AdminAllCategoriesPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex size-full min-h-dvh items-center justify-center">
          <LoaderCircle className="animate-spin transition-all duration-300 ease-in-out" />
        </div>
      }
    >
      <AllCategoriesModule />
    </Suspense>
  );
};

export default AdminAllCategoriesPage;
