import { BlogPost } from "./schemas";
const blogPosts: BlogPost[] = [
  {
    "id": "1",
    "slug": "style-chronicles-fashion-trends-and-tips",
    "title": "Style Chronicles: Fashion Trends and Tips",
    "content": "<p>Fashion is more than just clothing...</p>",
    "author": {
      "name": "Robert Sunmary",
      "avatar": "/1.png",
      "bio": "Fashion journalist and style consultant"
    },
    "publishedAt": "15 Jan, 2024",
    "readTime": "8 min read",
    "views": "2.5K",
    "likes": 156,
    "category": "Fashion",
    "tags": ["Fashion", "Style", "Trends"],
    "featuredImage": "/1.png"
  },
  {
    "id": "2",
    "slug": "sustainable-wardrobe-2024-eco-fashion-guide",
    "title": "Sustainable Wardrobe: 2024 Eco-Fashion Guide",
    "content": "<p>How to build a climate-conscious closet...</p>",
    "author": {
      "name": "Emma Greenfield",
      "avatar": "/1.png",
      "bio": "Sustainable fashion advocate"
    },
    "publishedAt": "22 Mar, 2024",
    "readTime": "10 min read",
    "views": "3.1K",
    "likes": 224,
    "category": "Fashion",
    "tags": ["Sustainability", "Eco-Friendly"],
    "featuredImage": "/3.png"
  },
  {
    "id": "3",
    "slug": "menswear-revolution-2024-style-predictions",
    "title": "Menswear Revolution: 2024 Style Predictions",
    "content": "<p>Breaking gender norms in fashion...</p>",
    "author": {
      "name": "James Chen",
      "avatar": "/1.png",
      "bio": "Menswear editor"
    },
    "publishedAt": "5 Feb, 2024",
    "readTime": "6 min read",
    "views": "1.8K",
    "likes": 98,
    "category": "Fashion",
    "tags": ["Menswear", "Genderfluid"],
    "featuredImage": "/3.png"
  },
  {
    "id": "4",
    "slug": "the-future-of-ai-in-everyday-life",
    "title": "The Future of AI in Everyday Life",
    "content": "<p>Exploring the impact of artificial intelligence on our daily routines...</p>",
    "author": {
      "name": "Alex Johnson",
      "avatar": "/1.png",
      "bio": "Tech enthusiast and AI researcher"
    },
    "publishedAt": "18 Jul, 2024",
    "readTime": "9 min read",
    "views": "6.2K",
    "likes": 512,
    "category": "Technology",
    "tags": ["AI", "Machine Learning", "Future"],
    "featuredImage": "/3.png"
  },
  {
    "id": "5",
    "slug": "a-guide-to-mindful-eating",
    "title": "A Guide to Mindful Eating",
    "content": "<p>Transform your relationship with food through mindfulness...</p>",
    "author": {
      "name": "Dr. Sarah Davis",
      "avatar": "/1.png",
      "bio": "Nutritionist and wellness coach"
    },
    "publishedAt": "25 Jul, 2024",
    "readTime": "7 min read",
    "views": "4.8K",
    "likes": 389,
    "category": "Health",
    "tags": ["Mindfulness", "Nutrition", "Wellness"],
    "featuredImage": "/1.png"
  },
  {
    "id": "6",
    "slug": "exploring-the-hidden-gems-of-peru",
    "title": "Exploring the Hidden Gems of Peru",
    "content": "<p>A travel guide to the less-traveled paths of Peru...</p>",
    "author": {
      "name": "Chris Thompson",
      "avatar": "/1.png",
      "bio": "Travel blogger and adventurer"
    },
    "publishedAt": "30 Jul, 2024",
    "readTime": "11 min read",
    "views": "7.1K",
    "likes": 634,
    "category": "Travel",
    "tags": ["Peru", "South America", "Adventure"],
    "featuredImage": "/3.png"
  },
  {
    "id": "7",
    "slug": "the-art-of-making-sourdough-bread",
    "title": "The Art of Making Sourdough Bread",
    "content": "<p>A step-by-step guide to baking the perfect sourdough loaf...</p>",
    "author": {
      "name": "Emily White",
      "avatar": "/1.png",
      "bio": "Artisan baker and food blogger"
    },
    "publishedAt": "5 Aug, 2024",
    "readTime": "8 min read",
    "views": "5.5K",
    "likes": 478,
    "category": "Food",
    "tags": ["Baking", "Sourdough", "Recipes"],
    "featuredImage": "/1.png"
  },
  {
    "id": "8",
    "slug": "workwear-reinvented-2024-office-styles",
    "title": "Workwear Reinvented: 2024 Office Styles",
    "content": "<p>Professional dressing post-pandemic...</p>",
    "author": {
      "name": "Jennifer Cole",
      "avatar": "/images/authors/jennifer-cole.jpg",
      "bio": "Corporate stylist"
    },
    "publishedAt": "14 Jan, 2024",
    "readTime": "6 min read",
    "views": "2.1K",
    "likes": 132,
    "category": "Fashion",
    "tags": ["Workwear", "Professional"],
    "featuredImage": "/images/posts/modern-workwear.jpg"
  },
  {
    "id": "9",
    "slug": "sneaker-culture-2024-collabs-to-watch",
    "title": "Sneaker Culture: 2024 Collabs to Watch",
    "content": "<p>The most anticipated shoe releases...</p>",
    "author": {
      "name": "Tyler Jones",
      "avatar":"/images/authors/jennifer-cole.jpg",
      "bio": "Sneakerhead collector"
    },
    "publishedAt": "3 Mar, 2024",
    "readTime": "8 min read",
    "views": "4.5K",
    "likes": 387,
    "category": "Fashion",
    "tags": ["Sneakers", "Streetwear"],
    "featuredImage": "/images/posts/sneaker-trends.jpg"
  },
  {
    "id": "10",
    "slug": "swimwear-trends-summer-2024-forecast",
    "title": "Swimwear Trends: Summer 2024 Forecast",
    "content": "<p>From retro cuts to bold prints...</p>",
    "author": {
      "name": "Natalie Cruz",
      "avatar": "/images/authors/natalie-cruz.jpg",
      "bio": "Swimwear designer"
    },
    "publishedAt": "20 Apr, 2024",
    "readTime": "5 min read",
    "views": "3.3K",
    "likes": 211,
    "category": "Fashion",
    "tags": ["Swimwear", "Summer"],
    "featuredImage": "/images/posts/swimwear-2024.jpg"
  }
]
export default blogPosts;
