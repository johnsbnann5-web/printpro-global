import Image from "next/image";

type ProductImageVariant = "hero" | "hang-tags" | "factory";

type ProductImageProps = {
  alt: string;
  detail: string;
  futurePath: string;
  imagePath?: string;
  label: string;
  variant: ProductImageVariant;
};

export function ProductImage({ alt, detail, futurePath, imagePath, label, variant }: ProductImageProps) {
  return (
    <div className={`product-image product-image-${variant}`} data-future-image={futurePath}>
      <div className="product-image-placeholder" aria-hidden="true">
        {variant === "hero" && <><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-sheet sheet-back" /><div className="visual-sheet sheet-front"><span>TAG<br />YOUR<br />STORY</span></div></>}
        {variant === "hang-tags" && <div className="hang-tags-stack"><i /><i /><i /></div>}
        {variant === "factory" && <div className="capability-stamp">PP<br /><small>GLOBAL</small></div>}
      </div>
      <div className="product-image-copy">
        <span>{label}</span>
        <small>{detail}</small>
      </div>
      {imagePath && <Image className="product-image-photo" src={imagePath} alt={alt} fill sizes="(max-width: 900px) 90vw, 520px" />}
    </div>
  );
}