
import React, { useState } from 'react';
import { Grid, List, MessageSquare, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreadCard from './ThreadCard';
import ThreadView from './ThreadView';

interface Thread {
  id: string;
  title: string;
  content: string;
  author: string;
  avatar: string;
  image: string;
  replies: number;
  views: number;
  likes: number;
  createdAt: string;
  tags: string[];
}

const mockThreads: Thread[] = [
  {
    id: '1',
    title: 'The Future of Web Development: What to Expect in 2024',
    content: 'As we dive deeper into 2024, the landscape of web development continues to evolve at an unprecedented pace. From AI-powered development tools to revolutionary frameworks, developers are experiencing a transformation that promises to reshape how we build digital experiences. In this comprehensive discussion, we explore the emerging trends, technologies, and methodologies that are defining the next generation of web development.',
    author: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop',
    replies: 47,
    views: 1240,
    likes: 89,
    createdAt: '2024-01-15',
    tags: ['Web Development', 'Technology', 'Trends']
  },
  {
    id: '2',
    title: 'Building Scalable React Applications: Best Practices and Architecture',
    content: 'When developing large-scale React applications, architecture becomes paramount. This thread explores proven patterns, state management strategies, and component design principles that have helped teams build maintainable and scalable applications. We discuss everything from folder structure to performance optimization techniques.',
    author: 'Alex Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop',
    replies: 32,
    views: 890,
    likes: 76,
    createdAt: '2024-01-12',
    tags: ['React', 'Architecture', 'Best Practices']
  },
  {
    id: '3',
    title: 'The Art of CSS: Creating Beautiful Animations and Interactions',
    content: 'CSS has evolved far beyond simple styling. Modern CSS enables developers to create stunning animations, smooth interactions, and responsive designs that feel native. Join us as we explore advanced CSS techniques, from custom properties to complex animations that bring websites to life.',
    author: 'Maria Santos',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop',
    replies: 28,
    views: 654,
    likes: 92,
    createdAt: '2024-01-10',
    tags: ['CSS', 'Animation', 'UI/UX']
  },
  {
    id: '4',
    title: 'Database Design Patterns for Modern Applications',
    content: 'Database design is the foundation of any robust application. This discussion covers modern database patterns, from traditional relational models to NoSQL solutions, and how to choose the right approach for your specific use case. We explore performance considerations, scalability challenges, and emerging technologies.',
    author: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop',
    replies: 19,
    views: 423,
    likes: 34,
    createdAt: '2024-01-08',
    tags: ['Database', 'Backend', 'Architecture']
  },
  {
    id: '5',
    title: 'Machine Learning Integration in Web Applications',
    content: 'The integration of machine learning capabilities into web applications is becoming increasingly accessible. This thread explores practical approaches to implementing ML features, from client-side inference to cloud-based solutions, and discusses the tools and frameworks that make it possible.',
    author: 'Lisa Zhang',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop',
    replies: 15,
    views: 312,
    likes: 48,
    createdAt: '2024-01-05',
    tags: ['Machine Learning', 'AI', 'Integration']
  }
];

const ForumThread = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null);

  if (selectedThread) {
    return (
      <ThreadView 
        thread={selectedThread} 
        onBack={() => setSelectedThread(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Developer Forum</h1>
              <p className="text-muted-foreground mt-2">
                Discover insights, share knowledge, and connect with the community
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="transition-all duration-200"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="transition-all duration-200"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Thread Grid/List */}
      <div className="container mx-auto px-6 py-8">
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {mockThreads.map((thread) => (
            <ThreadCard
              key={thread.id}
              thread={thread}
              viewMode={viewMode}
              onClick={() => setSelectedThread(thread)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumThread;
