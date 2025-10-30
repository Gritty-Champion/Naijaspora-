import RelatedPostCard from './RelatedPostCard'; 
import Image1 from '@/img/blogs/sample1.png'; 
import Image2 from '@/img/blogs/journey.png';

const relatedPostsData = [
  {
    image: Image1,
    title: 'Uploading Visa Docs: Tips & Requirements',
    author: 'Emeka Johnson',
    date: 'June 6, 2025',
    slug: 'uploading-visa-docs',
  },
  {
    image: Image2,
    title: 'Packing for Relocation: What to Take & Leave',
    author: 'Olamide Ibe',
    date: 'June 7, 2025',
    slug: 'packing-for-relocation',
  }
];

const RelatedPosts = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-left text-headline-small font-medium text-neutral-50 uppercase tracking-wider mb-8">
          IF YOU ENJOYED THIS, CHECK THESE OUT
        </h2>
        <div className="flex items-center flex-wrap sm:flex-nowrap gap-4">
          {relatedPostsData.map((post, index) => (
            <RelatedPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;