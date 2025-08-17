import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const seoData = {
    title: "Blog",
    description: "Stay updated with the latest trends in web development, AI technology, e-commerce solutions, and digital innovation. Expert insights and tutorials from SitePerHour.",
    keywords: "web development blog, AI technology, e-commerce tutorials, web3 development, React tutorials, modern web development, digital innovation, programming insights",
    canonicalUrl: "/blog",
    ogImage: "/images/360_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ.jpg"
  };
  const featuredPost = {
    id: 1,
    title: "Why Web3 is Revolutionizing the Internet: A Developer's Perspective",
    excerpt: "Explore how Web3 technologies like blockchain, decentralized storage, and smart contracts are reshaping the digital landscape and creating new opportunities for businesses.",
    author: "SitePerHour Team",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web3",
    image: "/images/360_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ.jpg",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "AI-Powered Web Development: The Future is Here",
      excerpt: "Discover how artificial intelligence is transforming web development workflows, from automated code generation to intelligent UX optimization.",
      author: "SitePerHour Team",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "AI Technology",
      image: "/images/software-development-programming-coding-vector-29570719.jpg"
    },
    {
      id: 3,
      title: "Building Scalable E-commerce Solutions with Modern Tech Stack",
      excerpt: "Learn about the latest technologies and best practices for creating high-performance e-commerce platforms that scale with your business.",
      author: "SitePerHour Team",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "E-commerce",
      image: "/images/ecomerce.avif"
    },
    {
      id: 4,
      title: "The Rise of Headless CMS: Why Your Next Website Should Be Headless",
      excerpt: "Understand the benefits of headless CMS architecture and how it enables faster, more flexible, and more scalable web applications.",
      author: "SitePerHour Team",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Web Development",
      image: "/images/Screenshot 2025-05-20 142446.png"
    },
    {
      id: 5,
      title: "Mobile-First Design: Creating Exceptional User Experiences",
      excerpt: "Explore mobile-first design principles and learn how to create responsive websites that deliver outstanding user experiences across all devices.",
      author: "SitePerHour Team",
      date: "2024-01-05",
      readTime: "5 min read",
      category: "Design",
      image: "/images/mobile_app.avif"
    },
    {
      id: 6,
      title: "SEO in 2024: Advanced Strategies for Better Rankings",
      excerpt: "Discover the latest SEO techniques and strategies that will help your website rank higher in search engines and attract more organic traffic.",
      author: "SitePerHour Team",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "SEO",
      image: "/images/marketing.avif"
    },
    {
      id: 7,
      title: "Building Trust Online: Website Security Best Practices",
      excerpt: "Learn essential security measures every website owner should implement to protect their site and users from cyber threats.",
      author: "SitePerHour Team",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Security",
      image: "/images/rebranding.avif"
    }
  ];

  const categories = [
    { name: "All", count: 7 },
    { name: "Web3", count: 1 },
    { name: "AI Technology", count: 1 },
    { name: "E-commerce", count: 1 },
    { name: "Web Development", count: 1 },
    { name: "Design", count: 1 },
    { name: "SEO", count: 1 },
    { name: "Security", count: 1 }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "SitePerHour Tech Blog",
    "description": "Latest insights on web development, AI technology, Web3, and digital innovation",
    "publisher": {
      "@type": "Organization",
      "name": "SitePerHour"
    },
    "url": "https://siteperhour.vercel.app/blog"
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Tech Blog - Latest Insights on Web Development, AI & Web3"
        description="Stay updated with the latest trends in web development, AI technology, Web3, e-commerce, and digital innovation. Expert insights and practical guides from the SitePerHour team."
        keywords="web development blog, AI technology, Web3, blockchain, e-commerce, SEO, website design, digital innovation, tech trends"
        canonicalUrl="/blog"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary">TECH BLOG</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Latest Insights on
              <span className="text-primary block">Web Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay ahead of the curve with expert insights on web development, AI technology, 
              Web3 innovations, and the latest trends shaping the digital landscape.
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Featured Article
            </h2>
          </div>
          
          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <Button>
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories & Articles */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-secondary/50 cursor-pointer">
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="outline" className="text-xs">{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get the latest articles delivered to your inbox.
                  </p>
                  <div className="space-y-2">
                    <Input placeholder="Your email" />
                    <Button className="w-full">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="aspect-video">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="font-bold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline">Load More Articles</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Follow Our Blog */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Follow Our Blog?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay ahead in the fast-evolving world of technology with expert insights and practical guides
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Latest Trends</h3>
                <p className="text-muted-foreground text-sm">
                  Be the first to know about emerging technologies and industry trends that matter.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <User className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expert Insights</h3>
                <p className="text-muted-foreground text-sm">
                  Learn from experienced developers and industry professionals with proven track records.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <ArrowRight className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Practical Guides</h3>
                <p className="text-muted-foreground text-sm">
                  Step-by-step tutorials and actionable advice you can implement immediately.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            From reading about the latest trends to implementing them - let our expert team help you 
            leverage cutting-edge technologies for your business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/#contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link to="/pricing/custom">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
//BLOG
