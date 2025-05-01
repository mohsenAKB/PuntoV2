export const API = {
  getInitializeConfigs: `v1/initial`,
  getSkillList: `v1/users/skills?filter[has_image]=true`,
  getLatestProjects: `v1/projects/latest?filter[has_image]=true`,
  getIdeas: (query = "") => `v1/projects/ideas?${query}`,
  getDesignersList: (query = "") => `v1/users?${query}`,
  getDesigner: (designersId: number) => `v1/users/${designersId}`,
  getProject: (projectId: number) => `v1/projects/${projectId}`,
  UpdateProject: (projectId: number) => `v1/projects/${projectId}`,
  getProjects: (query = "") => `v1/projects?${query}`,
  getMyProfile: `v1/users/current/profile`,
  loginWithPassword: `v1/auth/password`,
  EnterPhoneOtp: `v1/auth/otp`,
  searcgIdea: (query = "") => `v1/projects/ideas/search?q=${query}`,
  verifyOtp: "v1/auth/verify-otp",
  updatePassword:'v1/auth/update-password',
  registerUserData:'v2/auth/register',
  loginSendOtp: "v1/auth/otp",
  loginVerifyOtp: "v1/auth/verify-otp",
  CreateProject: "v1/projects",
  getProjectss: (project_id: number) => `v1/projects/${project_id}`,
  getProfile: "v1/users/current/profile",
  getProvinces: "v1/geo/provinces",
  getDegrees: "v1/users/degrees",
  getCountry: "v1/geo/countries",
  updateProfile: "v1/users/current/profile",
  createAttachment: "v1/attachments",
  getMyProjects: (query = "") => `v1/projects/my?${query}`,
  getProjectById: (id: number) => `v1/projects/${id}`,
  createMedia: (projectId: number, fileId: number) =>
    `v1/projects/${projectId}/media/${fileId}`,
  setProjectCoverMedia: (projectId: number) => `v1/projects/${projectId}/cover`,
  removeProjectMedia: (projectId: number, fileId: number) =>
    `v1/projects/${projectId}/media/${fileId}`,
  updateMedia: (projectId: number, fileId: number) =>
    `v1/projects/${projectId}/media/${fileId}`,
  getDesinersInfo: (query = "") => `v1/users/search?q=${query}`,
  submitBusinessProfile: "v1/users/current/company/profile",
  deleteProject: (projectId: number) => `v1/projects/${projectId}`,
  sibmitIncrementIdeaView: (attachment_id: number) =>
    `v1/projects/ideas/${attachment_id}/views/increment`,

  // job
  submitJob: "v1/jobs",
  updateJobPost: (jobPost_id: number) => `v1/jobs/${jobPost_id}`,
  getJobPost: (jobPost_id: number) => `v1/jobs/${jobPost_id}`,
  getJobPostList: (query = "") => `v1/jobs?${query}`,
  getSingleJobPost: (jobPost_id: number) => `v1/jobs/${jobPost_id}`,
  getMyJobList: `v1/jobs/my`,
  submitApplyJob: (jobPost_id: number) => `v1/jobs/${jobPost_id}/apply`,
  getApplicatList: (jobPost_id: number) => `v1/jobs/${jobPost_id}/applicants`,
  updateJobPostUserApplicationStatus: (jobPost_id: number, user_id: number) =>
    `v1/jobs/${jobPost_id}/applicants/${user_id}`,
  getCitiesFiltered: (provinceID: number) =>
    `v1/geo/cities?filter[province]=${provinceID} `,
  getDistrictFiltered: (citiesID: number) =>
    `v1/geo/districts?filter[city]=${citiesID} `,

  // GEO
  getCity: "v1/geo/cities",
  getDistricts: "v1/geo/districts",

  // single designer
  getDesignerByUsername: (username: string) => `v1/users/username/${username}`,

  // blog
  getCategories: "v1/blog/categories",
  getBlogs: (ID: number) => `v1/blog/posts?filter[category]=${ID}`,
  getBlogsCommon: `v1/blog/posts?filter[is_common]=true`,
  getBlogPsot: (ID: number) => `v1/blog/posts/${ID}`,
  getBlogPost: `v1/blog/posts`,
  getBlogPsotBySlug: (slug: string) => `v1/blog/posts/slug/${slug}`,

  // Projects
  getFeaturedProjectList: `v1/projects/featured`,
};
