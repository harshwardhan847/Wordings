"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";

type Props = {
  src?: string | null;
  isOpen?: boolean;
  onClose: () => void;
};

const ImageModal = ({ src, isOpen, onClose }: Props) => {
  if (!src) return null;
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="w-80 h-80">
        <Image alt="image" className="object-cover" fill src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
