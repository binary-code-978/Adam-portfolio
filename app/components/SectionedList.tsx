"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState, type ReactNode } from "react";

export interface SectionedListItem<C extends string> {
  id: string;
  title: string;
  detail?: string;
  category: C;
  href?: string;
  ctaLabel?: string;
  rightSlot?: ReactNode;
}

export interface SectionedListGroup<C extends string> {
  category: C;
  label: string;
  accentHex: string;
  icon: string;
}

export interface SectionedListProps<C extends string> {
  items: ReadonlyArray<SectionedListItem<C>>;
  groups: ReadonlyArray<SectionedListGroup<C>>;
  filters?: ReadonlyArray<{ value: C | "all"; label: string }>;
  defaultFilter?: C | "all";
}

function withArrow(label: string): string {
  return label.trimEnd().endsWith("→") ? label : `${label} →`;
}

export function SectionedList<C extends string>({
  items,
  groups,
  filters,
  defaultFilter = "all",
}: SectionedListProps<C>) {
  const [filter, setFilter] = useState<C | "all">(defaultFilter);

  const visibleItems =
    filter === "all"
      ? items
      : items.filter((item) => item.category === filter);

  const visibleGroups = groups
    .map((group) => ({
      group,
      groupItems: visibleItems.filter(
        (item) => item.category === group.category
      ),
    }))
    .filter((entry) => entry.groupItems.length > 0);

  return (
    <div>
      {filters && filters.length > 0 ? (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {filters.map((option) => {
            const active = filter === option.value;
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(option.value)}
                className={
                  "rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors duration-200 " +
                  (active
                    ? "bg-[#5DCAA5]/10 text-[#5DCAA5] border-[#5DCAA5]/30"
                    : "bg-transparent text-white/65 border-white/15 hover:text-white hover:border-white/30")
                }
              >
                {option.label}
              </button>
            );
          })}
        </div>
      ) : null}

      {visibleGroups.length === 0 ? (
        <p className="text-xs text-white/45">Nothing in this section yet.</p>
      ) : (
        visibleGroups.map(({ group, groupItems }, groupIndex) => (
          <div
            key={group.category}
            className={groupIndex > 0 ? "mt-3" : undefined}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  style={{ color: group.accentHex }}
                  className="text-[10px] leading-none"
                >
                  {group.icon}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">
                  {group.label}
                </span>
              </div>
              <span className="text-[10px] text-white/35">
                {groupItems.length}
              </span>
            </div>

            <ul className="flex flex-col">
              {groupItems.map((item, itemIndex) => {
                const notLast = itemIndex < groupItems.length - 1;
                const rowClass =
                  "relative flex items-start justify-between gap-3 py-3 " +
                  (notLast ? "border-b border-white/[0.06]" : "");

                return (
                  <li key={item.id} className={"group " + rowClass}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        aria-label={item.title}
                        className="absolute inset-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5DCAA5]/50"
                      />
                    ) : null}

                    <div className="min-w-0">
                      <div className="text-sm font-medium text-white">
                        {item.title}
                      </div>
                      {item.detail ? (
                        <div className="mt-0.5 text-xs text-white/55">
                          {item.detail}
                        </div>
                      ) : null}
                      {item.href && item.ctaLabel ? (
                        <div className="mt-1 text-[11px] font-medium text-[#5DCAA5]/80 transition-colors duration-200 group-hover:text-[#5DCAA5]">
                          {withArrow(item.ctaLabel)}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex shrink-0 items-center gap-2 pt-0.5">
                      {item.rightSlot}
                      {item.href ? (
                        <ArrowUpRight
                          className="h-4 w-4 text-white/55 transition-colors duration-200 group-hover:text-[#5DCAA5]"
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
