import { brandConfig } from "@/config/brand.config";

/**
 * BrandLockup — emblema (imagem) + "Mecânica Tec" e "by UniEjatec" em texto real.
 */
export function BrandLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={brandConfig.emblem.onLight}
        alt=""
        aria-hidden
        width={256}
        height={256}
        className="h-11 w-11 shrink-0 sm:h-12 sm:w-12"
      />
      <span className="flex flex-col leading-none">
        <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-text-primary sm:text-xl">
          {brandConfig.name}
        </span>
        <span className="mt-1 text-xs font-medium text-text-secondary">{brandConfig.signature}</span>
      </span>
    </span>
  );
}
