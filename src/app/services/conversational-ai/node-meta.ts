// Per-node metadata: the anchor ids the motion runtime resolves against.
export type NodeMeta = { anchor?: string };
export type NodeMetaMap = Record<number, NodeMeta | undefined>;

export const Logo_meta: NodeMetaMap[] = [
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    { 1: { anchor: "motion-2" } },
    { 0: { anchor: "motion-3" } },
    {  }
];
