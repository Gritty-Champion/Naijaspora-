import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Post {
  image: StaticImageData;
  title: string;
  author: string;
  date: string;
  slug: string;
}

interface RelatedPostCardProps {
  post: Post;
}

const RelatedPostCard: React.FC<RelatedPostCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group cursor-pointer w-90">
      {/* Image Section */}
      <div className="relative w-80 h-80  rounded-2xl overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="pt-4">
        <h3 className="text-headline-medium font-medium text-black mb-4 leading-tight">
          {post.title}
        </h3>
        <p className="text-title-medium text-black font-medium">
          {post.author} - {post.date}
        </p>
      </div>
    </Link>
  );
};

export default RelatedPostCard;