
import React from 'react';
import { MessageSquare, Eye, Heart, Clock } from 'lucide-react';
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

interface ThreadCardProps {
  thread: Thread;
  viewMode: 'grid' | 'list';
  onClick: () => void;
}

const ThreadCard = ({ thread, viewMode, onClick }: ThreadCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (viewMode === 'list') {
    return (
      <div 
        onClick={onClick}
        className="group bg-card border rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1"
      >
        <div className="flex gap-6">
          <div className="relative overflow-hidden rounded-lg flex-shrink-0">
            <img
              src={thread.image}
              alt={thread.title}
              className="w-32 h-20 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                {thread.title}
              </h2>
            </div>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {thread.content}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <img
                    src={thread.avatar}
                    alt={thread.author}
                    className="w-6 h-6 rounded-full"
                  />
                  <span>{thread.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{formatDate(thread.createdAt)}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{thread.replies}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{thread.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  <span>{thread.likes}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className="group bg-card border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-2"
    >
      <div className="relative overflow-hidden">
        <img
          src={thread.image}
          alt={thread.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <img
            src={thread.avatar}
            alt={thread.author}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">{thread.author}</p>
            <p className="text-xs text-muted-foreground">{formatDate(thread.createdAt)}</p>
          </div>
        </div>
        
        <h2 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {thread.title}
        </h2>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {thread.content}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {thread.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {thread.tags.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{thread.tags.length - 2}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{thread.replies}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{thread.views}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span>{thread.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadCard;
