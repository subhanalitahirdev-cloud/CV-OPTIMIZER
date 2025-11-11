import { Component } from "@/components/blog-posts"

export default function TeamFeatureSection() {
  return (
    <Component
        title="Built for End User And Teams"
        description="Discover the most engaging content from our amazing community of developers and designers"
        backgroundLabel=""
        backgroundPosition="left"
        posts={[
        {
          id: 1,
          title: "Create multiple tailored resumes for different positions.",
          category: "Per-Job Varients",
          imageUrl: "/position-2.jpg",
          views: 2180,
          rating: 5,
          href: '#'
        },
        {
          id: 2,
          title: "Optimize and track multiple CVs at Once.",
          category: "Cohort Analytics",
          imageUrl: "/job.jpg",
          views: 1456,
          rating: 4,
          href: '#'
        },
        {
          id: 3,
          title: "Hosted on AWS with 99.9% uptime and audit trails.",
          category: "Enterprise-Grade Reliability",
          imageUrl: "/hosting.jpg",
          views: 987,
          rating: 4,
          href: '#'
        }
      ]}
        className="mb-16"
      />
  )
}
