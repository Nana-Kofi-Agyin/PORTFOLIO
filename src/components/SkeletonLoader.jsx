/**
 * SkeletonLoader Component
 * Reusable skeleton screens with shimmer animation effect
 */
const SkeletonLoader = ({ variant = 'card', count = 1 }) => {
  const skeletons = Array.from({ length: count });

  // Card skeleton for Projects and Services
  const CardSkeleton = () => (
    <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-[28rem] bg-gradient-to-br from-slate-800/50 to-slate-900/50"></div>
      
      {/* Content */}
      <div className="p-8 space-y-4">
        {/* Title */}
        <div className="h-8 bg-slate-700/50 rounded-lg w-3/4"></div>
        
        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-slate-700/40 rounded w-full"></div>
          <div className="h-4 bg-slate-700/40 rounded w-5/6"></div>
        </div>
        
        {/* Tags */}
        <div className="flex gap-2 pt-2">
          <div className="h-6 bg-slate-700/40 rounded-full w-16"></div>
          <div className="h-6 bg-slate-700/40 rounded-full w-20"></div>
          <div className="h-6 bg-slate-700/40 rounded-full w-24"></div>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <div className="flex-1 h-12 bg-slate-700/40 rounded-lg"></div>
          <div className="w-[4.5rem] h-12 bg-slate-700/40 rounded-lg"></div>
        </div>
      </div>
      
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </div>
  );

  // Service card skeleton (simpler version)
  const ServiceSkeleton = () => (
    <div className="relative bg-white/5 backdrop-blur-sm p-12 rounded-2xl border border-white/10 animate-pulse">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-slate-700/50 rounded-xl"></div>
      </div>
      
      {/* Title */}
      <div className="h-8 bg-slate-700/50 rounded-lg w-2/3 mx-auto mb-6"></div>
      
      {/* Description */}
      <div className="space-y-2">
        <div className="h-4 bg-slate-700/40 rounded w-full"></div>
        <div className="h-4 bg-slate-700/40 rounded w-5/6 mx-auto"></div>
        <div className="h-4 bg-slate-700/40 rounded w-4/6 mx-auto"></div>
      </div>
      
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </div>
  );

  // Skill card skeleton
  const SkillSkeleton = () => (
    <div className="relative bg-slate-900/40 backdrop-blur-md p-12 rounded-2xl border border-white/10 animate-pulse">
      {/* Title */}
      <div className="h-8 bg-slate-700/50 rounded-lg w-2/3 mb-4"></div>
      
      {/* Subtitle */}
      <div className="h-6 bg-slate-700/40 rounded w-1/2 mb-8"></div>
      
      {/* Content bars */}
      <div className="space-y-5">
        {[1, 2, 3].map((i) => (
          <div key={i}>
            <div className="flex justify-between mb-2">
              <div className="h-4 bg-slate-700/40 rounded w-20"></div>
              <div className="h-4 bg-slate-700/40 rounded w-12"></div>
            </div>
            <div className="h-[1.2rem] bg-slate-700/30 rounded-full"></div>
          </div>
        ))}
      </div>
      
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </div>
  );

  // Stats skeleton (for About section)
  const StatsSkeleton = () => (
    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-pulse">
      <div className="h-12 bg-slate-700/50 rounded-lg w-16 mx-auto mb-2"></div>
      <div className="h-4 bg-slate-700/40 rounded w-24 mx-auto"></div>
      
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </div>
  );

  // Text block skeleton
  const TextSkeleton = () => (
    <div className="space-y-4 animate-pulse">
      <div className="h-10 bg-slate-700/50 rounded-lg w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-700/40 rounded w-full"></div>
        <div className="h-4 bg-slate-700/40 rounded w-full"></div>
        <div className="h-4 bg-slate-700/40 rounded w-5/6"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-700/40 rounded w-full"></div>
        <div className="h-4 bg-slate-700/40 rounded w-full"></div>
        <div className="h-4 bg-slate-700/40 rounded w-4/6"></div>
      </div>
    </div>
  );

  const renderSkeleton = () => {
    switch (variant) {
      case 'card':
        return <CardSkeleton />;
      case 'service':
        return <ServiceSkeleton />;
      case 'skill':
        return <SkillSkeleton />;
      case 'stats':
        return <StatsSkeleton />;
      case 'text':
        return <TextSkeleton />;
      default:
        return <CardSkeleton />;
    }
  };

  return (
    <>
      {skeletons.map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
