import { commonBlogAction } from "@/actions/blog/commonBlogAction";
import { LastProjectAction } from "@/actions/project/fetch-last-project";
import Home from "@/components/Home/Home";
import FrontLayout from "@/components/Layout/FrontLayout/FrontLayout";

export default async function HomePage() {
  const commonBlogs = await commonBlogAction();
  const lastProject = await LastProjectAction();

  return (
    <FrontLayout>
      <Home commonBlogs={commonBlogs} lastProject={lastProject} />
    </FrontLayout>
  );
}
