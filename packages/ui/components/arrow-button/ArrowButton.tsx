import { ArrowDownIcon, ArrowUpIcon } from "@coss/ui/icons";
import * as Tooltip from "@radix-ui/react-tooltip";

export type ArrowButtonProps = {
  arrowDirection: "up" | "down";
  onClick: () => void;
};

export function ArrowButton(props: ArrowButtonProps) {
  return (
    <Tooltip.Provider delayDuration={0}>
      {props.arrowDirection === "up" ? (
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              className="bg-default text-muted hover:text-emphasis border-default hover:border-emphasis invisible absolute left-0 -ml-4 -mt-4 mb-4 hidden h-6 w-6 scale-0 items-center justify-center rounded-md border p-1 transition-all group-hover:visible group-hover:scale-100 sm:ml-0 sm:flex lg:left-3"
              onClick={props.onClick}>
              <ArrowUpIcon className="h-5 w-5" />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-neutral-800 text-white px-2 py-1 rounded text-xs font-medium shadow-lg data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none z-50 scale-85"
              sideOffset={2}>
              Move up
              <Tooltip.Arrow className="fill-neutral-800 relative -top-[1px]" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      ) : (
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              className="bg-default text-muted border-default hover:text-emphasis hover:border-emphasis invisible absolute left-0 -ml-4 mt-8 hidden h-6 w-6  scale-0 items-center justify-center rounded-md border p-1 transition-all  group-hover:visible group-hover:scale-100 sm:ml-0 sm:flex lg:left-3"
              onClick={props.onClick}>
              <ArrowDownIcon className="h-5 w-5" />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-neutral-800 text-white px-2 py-1 rounded text-xs font-medium shadow-lg data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none z-50 scale-85"
              side="bottom"
              sideOffset={2}>
              Move down
              <Tooltip.Arrow className="fill-neutral-800 relative -top-[1px]" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      )}
    </Tooltip.Provider>
  );
}
