"use client";

import { Color, Size } from "@/types";
import { useState } from "react";
import Button from "../ui/button";
import { Filter as FilterIcon, Plus, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { IconButton } from "../ui/icon-button";

import Filter from "@/components/filters/filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

export const MobileFilters: React.FC<MobileFiltersProps> = ({
  sizes,
  colors,
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <FilterIcon size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-100 lg:hidden "
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-opacity-25" />

        <div className="fixed inset-0 z-200 flex">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-4 shadow-xl">
            <div className="flex items-center justify-end px-2">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />

              <Filter valueKey="colorId" name="colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
