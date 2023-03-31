import createClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "om0tk8fi",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-03-17",
  token:
    "skPwd42cx1JcQpOjZMT9KGTzOJWbYkRs6FnN4HHRpEb3DK2lQnbTpDr7fj1PZOagT0OjRZoC5JBGCcS7IAqhzlhSjq2wY9WvxfVfEx39gUj3UxPiv8ex8ROHYSFYTlvSWEQ1wlyqohcvskaLpQeq47jhPMZChVdMXe2dTszTKFx5Rbg86kOg",
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
