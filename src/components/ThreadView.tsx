
import React from 'react';
import { ArrowLeft, MessageSquare, Eye, Heart, Share2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

interface ThreadViewProps {
  thread: Thread;
  onBack: () => void;
}

const ThreadView = ({ thread, onBack }: ThreadViewProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4 hover:bg-accent transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Forum
          </Button>
        </div>
      </div>

      {/* Thread Content */}
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <article className="bg-card border rounded-lg overflow-hidden shadow-lg">
          {/* Featured Image */}
          <div className="relative h-80 overflow-hidden">
            <img
              src={thread.image}
              alt={thread.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="p-8">
            {/* Title and Meta */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                {thread.title}
              </h1>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={thread.avatar}
                    alt={thread.author}
                    className="w-12 h-12 rounded-full border-2 border-border"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{thread.author}</p>
                    <p className="text-sm text-muted-foreground">{formatDate(thread.createdAt)}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {thread.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-foreground leading-relaxed">
                {thread.content}
              </p>
              
              <p className="text-foreground leading-relaxed mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              
              <p className="text-foreground leading-relaxed mt-4">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>

            {/* Interaction Bar */}
            <div className="flex items-center justify-between pt-6 border-t">
              <div className="flex items-center gap-6">
                <Button variant="ghost" className="flex items-center gap-2 hover:text-red-500 transition-colors duration-200">
                  <Heart className="h-5 w-5" />
                  <span>{thread.likes}</span>
                </Button>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  <span>{thread.views}</span>
                </Button>
              </div>
              
              <Button className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Reply ({thread.replies})
              </Button>
            </div>
          </div>
        </article>

        {/* Replies Section Placeholder */}
        <div className="mt-8 bg-card border rounded-lg p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Replies ({thread.replies})
          </h3>
          <p className="text-muted-foreground">
            Reply functionality would be implemented here...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreadView;
