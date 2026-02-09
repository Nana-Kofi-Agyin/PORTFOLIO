/**
 * SkeletonLoader Component
 * Reusable skeleton screens with shimmer animation effect
 */
const SkeletonLoader = ({ variant = 'card', count = 1 }) => {
  const skeletons = Array.from({ length: count });

  // Card skeleton for Projects and Services
  const CardSkeleton = () => (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 animate-pulse"
         style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' }}>
      {/* Image area with 16:9 ratio to match Projects cards */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-transparent flex items-center justify-center"></div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 md:p-8">
        {/* Title */}
        <div className="h-6 bg-slate-700/50 rounded-lg w-1/2 mb-2"></div>

        {/* Description */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-slate-700/40 rounded w-full"></div>
          <div className="h-4 bg-slate-700/40 rounded w-5/6"></div>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            <div className="h-6 w-20 bg-purple-500/20 rounded-full border border-purple-500/30"></div>
            <div className="h-6 w-20 bg-purple-500/20 rounded-full border border-purple-500/30"></div>
            <div className="h-6 w-20 bg-purple-500/20 rounded-full border border-purple-500/30"></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 md:gap-4">
          <div className="flex-1 h-11 bg-slate-700/40 rounded-lg"></div>
          <div className="inline-flex justify-center items-center min-w-[44px] min-h-[44px] w-[4.5rem] bg-white/5 border border-white/10 rounded-lg"></div>
        </div>
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </div>
  );

  // Service card skeleton (simpler version)
  const ServiceSkeleton = () => (
    <div className="w-full">
      <div className="relative border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm animate-pulse">
        {/* Header (icon + title + chevron) */}
        <div className="p-5 sm:p-6 min-h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-700/50 rounded-md"></div>
            <div className="h-6 bg-slate-700/50 rounded w-1/3"></div>
          </div>
          <div className="w-5 h-5 bg-slate-700/40 rounded" />
        </div>

        {/* Collapsed content placeholder */}
        <div className="border-t border-white/5 px-5 sm:px-6 py-4">
          <div className="h-4 bg-slate-700/40 rounded w-full"></div>
        </div>

        {/* Shimmer overlay */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </div>
  );

  // Skill card skeleton
  const SkillSkeleton = () => (
    <div className="relative group bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 shadow-lg animate-pulse min-h-[120px] sm:min-h-[140px] md:min-h-[150px] p-4 sm:p-5">
      {/* Centered icon placeholder */}
      <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
        <div className="relative">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-700/50 rounded-full mx-auto"></div>
        </div>

        {/* Name placeholder */}
        <div className="h-4 bg-slate-700/50 rounded w-1/3 mx-auto"></div>

        {/* Small meta (projects count) */}
        <div className="h-3 bg-slate-700/40 rounded w-1/6 mx-auto"></div>
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </div>
  );

  // Large variant for first skill in each category (matches `SkillCard` large size)
  const SkillSkeletonLarge = () => (
    <div className="relative group bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg animate-pulse min-h-[150px] p-4 sm:p-5 md:p-6">
      <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-700/50 rounded-full mx-auto"></div>
        <div className="h-4 bg-slate-700/50 rounded w-1/3 mx-auto"></div>
        <div className="h-3 bg-slate-700/40 rounded w-1/6 mx-auto"></div>
      </div>
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
      {skeletons.map((_, index) => {
        // For skills, make the first item use the large variant and span two columns on small+ screens
        if (variant === 'skill') {
          const wrapperClass = index === 0 ? 'col-span-1 sm:col-span-2' : '';
          return (
            <div key={index} className={`${wrapperClass} w-full h-full`}>
              {index === 0 ? <SkillSkeletonLarge /> : <SkillSkeleton />}
            </div>
          );
        }

        return (
          <div key={index} className="w-full h-full">
            {renderSkeleton()}
          </div>
        );
      })}
    </>
  );
};

export default SkeletonLoader;
