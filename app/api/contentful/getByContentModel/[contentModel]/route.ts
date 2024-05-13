/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';

import getByContentModel from '@/Methods/getByContentModel/methods/GET';
import { AllContentModelTypes } from '@/Types/contentful-codegen/SimplerContentfulTypes';

type Context = {
  params: {
    contentModel: AllContentModelTypes;
  };
};

export const GET = async (_req: NextRequest, context: Context) => {
  const { contentModel } = context.params;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, status] = await getByContentModel(contentModel);

  return NextResponse.json(
    {
      entries: [
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: '6jqgbS4g237Je5VoBQ1ZQ6',
            type: 'Entry',
            createdAt: '2024-05-07T00:40:57.597Z',
            updatedAt: '2024-05-08T13:44:45.246Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'felthairam',
            title: 'Felthairam',
            articleType: 'Character',
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '6SBVTc754lyfRIoHlEv8Ga',
                  type: 'Entry',
                  createdAt: '2024-05-07T00:36:51.130Z',
                  updatedAt: '2024-05-10T16:01:47.616Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Felthairam - Intro',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Initially, Unity was comprised solely of ordinary gnomes. Over time, these gnomes began to manifest a unique genetic trait known as felthairam, which altered their physical characteristics to better suit their roles and tasks.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Each gnome in Unity is destined to develop one of three specific felthairams. These genetic traits start to emerge as special characteristics when a gnome reaches approximately 250 years of age. One notable change during this developmental phase is a reduced need for sleep, eventually allowing gnomes to feel fully rested with just 4 hours of sleep per night. The culmination of this transformation enhances their night vision, significantly improving their ability to see in the dark.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Each felthairam variant grants access to a unique ability, named ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'Queltha',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              ', exclusive to that variant and imparted only upon reaching the status of Aissan. Achieving mastery in this specialized skill takes an average of 15 years, with the execution of Queltha necessitating the use of their Purrta.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: 'UEGma6cQEw7HOnzJ9aYhc',
                  type: 'Entry',
                  createdAt: '2024-05-07T00:40:03.596Z',
                  updatedAt: '2024-05-10T16:15:33.118Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Felthairam - FELTHAIRAM VARIANTS',
                  title: 'Felthairam Variants',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                          {
                            data: {
                              uri: 'luntha-nos',
                            },
                            content: [
                              {
                                data: {},
                                marks: [],
                                value: 'Luntha-Nôs',
                                nodeType: 'text',
                              },
                            ],
                            nodeType: 'hyperlink',
                          },
                          {
                            data: {},
                            marks: [],
                            value: ', ',
                            nodeType: 'text',
                          },
                          {
                            data: {
                              uri: 'endlesin-glen',
                            },
                            content: [
                              {
                                data: {},
                                marks: [],
                                value: 'Endlesin Glen',
                                nodeType: 'text',
                              },
                            ],
                            nodeType: 'hyperlink',
                          },
                          {
                            data: {},
                            marks: [],
                            value: ' and ',
                            nodeType: 'text',
                          },
                          {
                            data: {
                              uri: 'amro-hom',
                            },
                            content: [
                              {
                                data: {},
                                marks: [],
                                value: 'Amro Hôm',
                                nodeType: 'text',
                              },
                            ],
                            nodeType: 'hyperlink',
                          },
                          {
                            data: {},
                            marks: [],
                            value: '.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: 'DMDK4SAesgeJmowz3SgP5',
                  type: 'Entry',
                  createdAt: '2024-05-08T13:42:33.917Z',
                  updatedAt: '2024-05-10T15:52:48.574Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Felthairam - UNKNOWN TO EVERYONE',
                  title: 'Unknown To Everyone',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value:
                              'When a Sônha is born, the felthairam varient that the child obtains depends on what is required at that time. For example, if there is a shortage of Amro Hôm, then there would be more Amro Hôm felthairam amonst new born to balance out the need.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: '5ohsHV3zNHxfYTfStcQhV',
            type: 'Entry',
            createdAt: '2024-05-07T02:40:13.775Z',
            updatedAt: '2024-05-07T02:40:13.775Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'hierarchies-wisdom',
            title: 'The Hierarchies of Wisdom',
            articleType: 'Generic',
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '1kXRdWD0wR52jQD8LZsTuC',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:37:40.547Z',
                  updatedAt: '2024-05-10T16:14:09.319Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'The Hierarchies of Wisdom - Intro',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Unity is split into three groups based on the state of their felthairam and their wisdom.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '3UfAB8Jd1q4rwoOn7bwRFo',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:38:39.263Z',
                  updatedAt: '2024-05-10T16:14:30.277Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'The Hierarchies of Wisdom - Inig',
                  title: 'Inig',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "First, there are the Inigs, who are just embarking on their journey and haven't yet developed their felthairam, which means they're still discovering which of the three types of felthairam they possess. They can opt to live with the Gwanos Hemp. However, if they wish to reside in a kitnapana settlement, they must first undergo the Alath-Trr ritual. The necessity for the Alath-Trr ritual stems from the fact that their felthairam hasn't developed, preventing any physical signs indicative of their belonging to the Unity race.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '14Jh6iSnrtjqpmz07iVTfy',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:39:04.715Z',
                  updatedAt: '2024-05-10T16:14:49.398Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'The Hierarchies of Wisdom - Segrins',
                  title: 'Segrins',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Next, we have the Segrins, individuals who have not only experienced the development of their felthairam but have also been honored with a purrta by the council during an Erhall. The manifestation of their felthairam grants them distinctive physical traits, allowing them the choice to reside in Gwanos Hem or the Kitnapanas.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '6cgBGSnyZJe9UC18MFFFaY',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:40:06.425Z',
                  updatedAt: '2024-05-10T16:15:01.614Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'The Hierarchies of Wisdom - Aissans',
                  title: 'Aissans',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Lastly, there are the Aissans, the respected elders charged with maintaining balance and ushering Segrins into their newfound responsibilities. Upon their induction during an erhall, they convene as the council, a testament to their elevated status and pivotal roles.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "Despite the natural progression from Segrin to Aissan, the ranks of Aissans remain sparse. The perilous journey and inherent risks of their vocation, coupled with their selfless creed to sacrifice for others—particularly those not of their rank—ensure their numbers are few. This scarcity underscores the valor and self-sacrifice that define an Aissan's existence.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "Every Aissan learns a special ritual linked to their felthairam. The Luntha-Nôs have the power to bring someone back to life at the expense of another's life. The Amro Hôm can locate and connect with a land animal, seeing through its eyes. Meanwhile, the Endlesin Glen possess the ability to reach out to sea creatures, gathering information from their past or present.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'As a Segrin ascends to the rank of Aissan, they are mentored by an Aissan, who has mastered the skill of their specific ritual. This knowledge is passed down through a ceremonial rite, involving the placement of their consecrated stone amidst an array of meticulously etched runes. Successful completion of this ritual imbues the stone with the newly acquired power. However, mastery is not immediate; it demands, on average, fifteen years of dedication to harness and integrate this power fully, a testament to the deep commitment and enduring patience required to ascend to and thrive as an Aissan.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: '6NwgqPlAG3f9kVqkLA9ju8',
            type: 'Entry',
            createdAt: '2024-05-07T02:36:18.388Z',
            updatedAt: '2024-05-07T02:36:18.388Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'purrta',
            title: 'Purrta',
            articleType: 'Generic',
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '5qBbQNWvuIwPGo63p8r89I',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:32:27.512Z',
                  updatedAt: '2024-05-10T16:13:01.163Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Purrta - Intro',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "At the moment an Inig ascends to an Segrin, they are presented with a stone by the council during the first Erhall where their felthairam's physical traits become evident. This ceremony marks the beginning of an important tradition, serving as a crucial rite of passage for the newly initiated Segrins. The stone, known as a purrta, holds significant importance as it symbolizes wisdom and the bearer's journey through life. As part of the ascension ceremony from a Segrin to an Aissan, the purrta plays a central role, embodying the transition and the accumulation of knowledge and experiences. This tradition underscores the deep connection between the purrta and the individual's development and recognition within their community.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '7oQArSmDoTBtpUm1x7ugcA',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:33:41.625Z',
                  updatedAt: '2024-05-10T16:13:26.237Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Purrta - The act of exchange',
                  title: 'The act of exchange',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "As Segrins progress through key moments in their lives or seek to honor meaningful relationships, it becomes a tradition to exchange the original purrta granted by the council for another one that resonates more deeply with their personal journey. Engaging in the exchange of purrtas during significant events, with close companions, or in tribute to those who have passed, serves to deepen the tradition's significance. Upon the demise of a Segrin or Aissan, the practice of placing their purrta in their mouth is observed, signifying the transference of their wisdom into the beyond and highlighting the perpetual cycle of learning and legacy.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '45lcLDHNuAweGEQqx2xB51',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:35:17.518Z',
                  updatedAt: '2024-05-10T16:13:58.101Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Purrta - Transitioning to Aissan',
                  title: 'Transitioning to Aissan',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "In the transition to becoming an Aissan, they must personalize their purrta, incorporating it into an accessory they can wear, for example a necklace, anklet, earring, etc. This customization culminates in a ceremony where, amidst their peers, they share the stone's significance and the tales it embodies with the council and the entire Unity community. These narratives are valued for the deep insights they provide, cherished by all, including the Aissans themselves.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Explain the entire process of what happens from the moment they get nominated to the point where they present.',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: '58sXdbTeNhAPi8bwoeshvp',
            type: 'Entry',
            createdAt: '2024-05-07T02:29:02.153Z',
            updatedAt: '2024-05-07T02:29:02.153Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'erhall',
            title: 'Erhall',
            articleType: 'Generic',
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '15oTHXOzVCfAHzGZLKMprg',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:15:13.437Z',
                  updatedAt: '2024-05-10T16:11:40.286Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Erhall - Intro',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Erhall is a pivotal gathering occurring every 15 years, strategically located near a sacred cave to facilitate the ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'Alath-Trr',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              " ritual. It's essential for all members of Unity to participate if possible. Spanning 15 days and segmented into various phases, the location and timing of Erhall are closely guarded secrets. This caution stems from the need to safeguard Malatra's resources; with Unity's members gathered and momentarily stepping back from their protective duties, revealing Erhall's details could invite threats to exploit Malatra's valuable ecosystem in their absence.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '27h4P6bXz0sZzhV8IqG00N',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:27:52.082Z',
                  updatedAt: '2024-05-10T16:12:30.757Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Erhall - Timeline',
                  title: 'Timeline',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'heading-4',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Day 1 to 4',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'From day 1 to day 4 of Erhall, Unity members come together, completing the construction of the new Erhall settlement.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-4',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Day 5 to 7',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'On day 5 to day 7 of Erhall, the community engaged in socializing, providing a valuable opportunity for members to catch up with both old and new friends, spend quality time with family, and enjoy a rare moment of uninhibited freedom. Meanwhile, amidst these moments of connection, the council was diligently at work, tasked with the important job of selecting the new Aissans. This process involved consultations with current Aissans from each ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'tribe',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              ', who would recommend individuals they felt were suited to take on the role of Aissan, considering their leadership qualities and contributions.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-4',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Day 8 and 9',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'On the early morning of the 8th day, the council announces which Segrins are chosen to become Aissans, giving them a day to prepare their ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'Purrta',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              " for presentation. It's common for Segrins to collect decorations in advance, hopeful of their selection. ",
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'On day 9, they prepare their Purrta',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-4',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Day 10 and 11',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'On days 10 and 11, the selected Segrins take center stage to present their Purrta and impart the wisdom of their experiences to Unity, positioned within a large circle to ensure they are seen by all.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-4',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Day 12',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "By day 12, the new Aissans assume the council's roles, distributing Purrtas to Inigs ready to become Segrins, marking their transition.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-4',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Day 13 to 14',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'During days 13 and 14 of Erhall, the community is invited to express their needs, worries or seek reconciliation, promoting transparent dialogue with the council. ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              'This was also the time for Endlesin Glen, Amro Hôm and Luntha-Nôs to request transition into Hiros or Gwanos Hemp',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              '. Notably, these days entertain requests for transitions from Paiiram to Amuweg, signifying a desire to undergo the Alath-Trr ritual. Such requests are specifically considered on the 13th, with priority given to their evaluation. Once the council assesses and finalizes the list of participants for the Alath-Trr, a dedicated team of volunteers is dispatched to the nearest secret cave to begin the essential preparations. This meticulous setup ensures that everything is in place for the ritual to proceed smoothly. At the dawn of the 14th day, Alath-Trr ritual begins.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-4',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Day 15',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'On day 15, the concluding day of Erhall, Unity seizes another chance for social interaction, while concurrently, the council and Aissans convene for a crucial meeting. In this session, they review the status of their respective sectors to strategize on tribe distribution and patrol routes, aiming to maintain equilibrium across the tribes. The Aissans are then charged with organizing the Segrins and securing necessary resources for their return to duty the following day. ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              'On this day, the council also desides when and where the next Erhall will take place. They then share it with ever Aissan.',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Additionally, this day signifies the conclusion of the Alath-Trr ritual. A congregation, primarily consisting of close friends, family, and other significant figures to the participants, assembles and proceeds to the ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'secret cave',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              '. There, they celebrate the individuals who have emerged as Amuwegs, embracing their successful transformation, and mournfully burrying those who did not survive.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '213mcIvfiACxdOyy57o1qs',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:28:50.234Z',
                  updatedAt: '2024-05-10T16:12:47.539Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Erhall - POST ERHALL',
                  title: 'Post Erhall',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value:
                              'Once the Hiros have left, the Luntha-Nôs dissasembles the establishments and move on.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: '2jgl4yVsM297Fm3oX6Qle2',
            type: 'Entry',
            createdAt: '2024-05-07T02:13:17.462Z',
            updatedAt: '2024-05-07T02:13:17.462Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'citizenship',
            title: 'Citizenship in Unity: Sônha, Amuweg & Paiiram',
            articleType: 'Character',
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '6Xq0vW5NNZyTO4bpRSPDMs',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:07:39.344Z',
                  updatedAt: '2024-05-10T16:09:56.770Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Citizenship - Intro',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Sônha refers to individuals who possess a ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'hyperlink',
                            data: {
                              uri: 'felthairam',
                            },
                            content: [
                              {
                                nodeType: 'text',
                                value: 'Felthairam',
                                marks: [],
                                data: {},
                              },
                            ],
                          },
                          {
                            nodeType: 'text',
                            value:
                              ', marking them as integral members of Unity. Paiiram are individuals not affiliated with Unity. Amuwegs are Paiiram welcomed into Unity through ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'hyperlink',
                            data: {
                              uri: 'alath-trr',
                            },
                            content: [
                              {
                                nodeType: 'text',
                                value: 'Alath-Trr',
                                marks: [],
                                data: {},
                              },
                            ],
                          },
                          {
                            nodeType: 'text',
                            value:
                              ", a spiritual selection ritual. Success in Alath-Trr signifies a rebirth into Unity, while failure results in a peaceful demise, with the individual's essence returning to the ",
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'eternal roots',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: ". Both outcomes are viewed with honor within Unity's perspective.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Sônha',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Sônha are individuals distinguished by their possession of a felthairam, signifying their core status within Unity. Since the presence of a felthairam in gnomes is confirmed through its fully developed traits, gnomes, particularly the younger ones, are typically presumed to be Sônha until proven otherwise.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Paiiram',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Paiirams are not recognized as citizens of Unity. Their pathway to citizenship exclusively involves participating in the Alath-Trr ritual.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Amuweg',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Amuwegs are individuals without a felthairam who gain citizenship by successfully completing the Alath-Trr ritual.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '16cAhy4VvnSBghLEChU9Eh',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:12:27.187Z',
                  updatedAt: '2024-05-10T16:10:22.234Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Citizenship - RIGHTS & PERCEPTIONS',
                  title: 'Rights & Perceptions',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Within Gwanos Hemp',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Within ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'Gwanos Hemp',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              ', Sônha held the highest level of rights, with their requests taking precedence at council deliberations, except for Alath-Trr petitions by Paiiram. Esteemed yet held to rigorous standards, Sônha were uniquely entitled to private residences, in contrast to Paiirams and Amuwegs who shared communal living spaces designed to accommodate them collectively. Amuwegs could move from communal housing to their own private residence only when entering into a partnership with a Sônha, a transition approved by the council during the ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'hyperlink',
                            data: {
                              uri: 'erhall',
                            },
                            content: [
                              {
                                nodeType: 'text',
                                value: 'Erhall',
                                marks: [],
                                data: {},
                              },
                            ],
                          },
                          {
                            nodeType: 'text',
                            value:
                              '. Unlike others, Sônha were exempt from the Alath-Trr ritual, regardless of felthairam evidence.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Paiirams, restricted to Gwanos Hemp, faced immediate return if found elsewhere, respected but limited in rights and largely directed by ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'hyperlink',
                            data: {
                              uri: 'aissan',
                            },
                            content: [
                              {
                                nodeType: 'text',
                                value: 'Aissan',
                                marks: [],
                                data: {},
                              },
                            ],
                          },
                          {
                            nodeType: 'text',
                            value: ', reflecting a perceived need for constant oversight and instruction.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Amuwegs, celebrated for their selflessness and expertise, earned significant respect. Chosen for Gwanos Hemp from many candidates, they enjoyed numerous rights, though not exceeding those of Sônha.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "Non-Sônha individuals were typically identified as Paiirams, with roles and the visibility of their purooth indicating whether they were Paiiram or Amuweg. Over time, the Gwanos Hemp community would naturally discern each member's status, fostering a deeper understanding among its members.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Within Kitnapana',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'In Kitnapana, Sônha and Amuwegs enjoyed equal rights. Since Paiirams could not transition out of Gwanos Hemp, individuals not identified as Sônha were typically presumed to be Amuwegs.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: '67R0yIJx3JCbtl9i7X0lfx',
            type: 'Entry',
            createdAt: '2024-05-07T01:57:53.463Z',
            updatedAt: '2024-05-07T02:03:30.723Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'traditions-of-transition',
            title: 'Traditions of Transition',
            articleType: 'Generic',
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: 'sY0tkzj3z61i0SdcyScNM',
                  type: 'Entry',
                  createdAt: '2024-05-07T01:57:48.991Z',
                  updatedAt: '2024-05-10T16:06:29.547Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Traditions of Transition - HIROS CIRCULAR TRANSITION OBLIGATIONS',
                  title: 'Hiros Circular Transition Obligations',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Throughout the ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'hyperlink',
                            data: {
                              uri: 'erhall',
                            },
                            content: [
                              {
                                nodeType: 'text',
                                value: 'Erhall',
                                marks: [],
                                data: {},
                              },
                            ],
                          },
                          {
                            nodeType: 'text',
                            value: ' cycle, ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'Hiros',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: ' receive a designated two-year period to transition into ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'Gwanos Hemp',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              ', effectively changing their status from Hiros to Gwanos Hemp. Although Hiros have the choice to choose which Gwanos Hemp settlement they transition too, the timing of this transition is determined by the council and ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'Aissans',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              ' from within the Hiros group. Exceptions to the predetermined location and time can be requested during the Erhall, allowing Hiros to align their transition with important personal relationships or significant events. To seek these exceptions, Hiros directly ask the council for a specific time and location during the gathering of Erhall.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Pregnancy introduces special considerations into the Hiros and Gwanos Hemp dynamic:',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'unordered-list',
                        data: {},
                        content: [
                          {
                            nodeType: 'list-item',
                            data: {},
                            content: [
                              {
                                nodeType: 'paragraph',
                                data: {},
                                content: [
                                  {
                                    nodeType: 'text',
                                    value:
                                      'A pregnant Hiros is transferred to the nearest Gwanos Hemp settlement and becomes Gwanos Hemp, where they stay until their child is five years old, after which they re transition into Hiros and resumes their responsibilities as such.',
                                    marks: [],
                                    data: {},
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            nodeType: 'list-item',
                            data: {},
                            content: [
                              {
                                nodeType: 'paragraph',
                                data: {},
                                content: [
                                  {
                                    nodeType: 'text',
                                    value:
                                      'If Gwanos Hemp becomes pregnant, they remain with their child. Should the child’s father be a Hiros, he is located and brought to the settlement to live as Gwanos Hemp for five years before returning to his being Hiros.',
                                    marks: [],
                                    data: {},
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "This arrangement ensures that, for parents who are both Hiros, their time as Gwanos Hemp align, reuniting the family for the child's first five years and again between the ages of 15 to 20. The cycle resumes its normal two-year pattern once the child reaches 20.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '2o9RwUdd7JZgewgqHO3YAq',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:01:27.617Z',
                  updatedAt: '2024-05-10T16:11:17.516Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Traditions of Transition - TRANSITIONS WITHIN UNITY: NAVIGATING BETWEEN ROLES',
                  title: 'Transitions Within Unity: Navigating Between Roles',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Navigating role changes within Unity, especially the shifts into or out of Gwanos Hemp or Hiros, involves a complex process influenced by a variety of factors:',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Luntha-Nôs',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'hyperlink',
                            data: {
                              uri: 'luntha-nos',
                            },
                            content: [
                              {
                                nodeType: 'text',
                                value: 'Luntha-Nôs',
                                marks: [],
                                data: {},
                              },
                            ],
                          },
                          {
                            nodeType: 'text',
                            value: ' cannot become Hiros but have the flexibility to leave Gwanos Hemp for ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'Kitnapana',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: ' or to exit ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'Malatra',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: '. Rejoining Gwanos Hemp requires council approval during an Erhall.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Endlesin Glen & Amro Hôm',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'These groups may transition within Gwanos Hemp under specific conditions set during Erhall. They can leave Hiros anytime for Kitnapana or beyond. Returning to Hiros from Kitnapana involves council approval at Erhall, while moving from Gwanos Hemp to Hiros necessitates fulfilling their Gwanos Hemp obligations first.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Inigs',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Inigs can leave Gwanos Hemp at anytime but must request from the council the re-transition into Gwanos Hemp.',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Paiiram',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Paiirams',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: ' are restricted to Gwanos Hemp and cannot leave Malatra without becoming an ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'Amuweg',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: '.\n',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-4',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Amuwegs',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Upon transitioning to an Amuweg, The council gives priority to their preference, should they opt to continue serving as Gwanos Hemp. While Amuwegs have the freedom to leave Gwanos Hemp whenever they choose, joining Gwanos Hemp necessitates a visit to Erhall to petition the council. This process involves presenting their potential contributions, highlighting how they intend to serve. The prestigious nature of becoming Gwanos Hemp attracts many from Kitnapana to Erhall, often journeying in groups for safety. The council evaluates the needs of Gwanos Hemp and decides which Amuwegs to integrate, aiming to distribute them strategically across Gwanos Hemp to ensure a balanced allocation of roles and address any unmet needs.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: 'JVMUvy8Qa51Atu92EdnpF',
                  type: 'Entry',
                  createdAt: '2024-05-07T02:02:10.727Z',
                  updatedAt: '2024-05-10T16:09:39.145Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Traditions of Transition - REQUESTS REGARDING ENTERING OR DEPARTING FROM MALATRA',
                  title: 'Requests Regarding Entering Or Departing From Malatra',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'The right to freely leave and enter Malatra was reserved solely for individuals exhibiting felthairam traits or carrying the mark of ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'purooth',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              '. Upon their return, however, they were required to first report to Kitnapana before pursuing any further transitions. This policy of restricted travel was implemented to reduce the potential infiltration of malicious entities seeking to extract and disseminate sensitive information. The possession of felthairam traits or the marking of purooth were seen as divine endorsements, marking individuals as reliable and faithful in the perspective of Unity.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: '2gLJM8xZNQVO9rrCRy3L15',
            type: 'Entry',
            createdAt: '2024-05-07T01:49:03.604Z',
            updatedAt: '2024-05-07T01:49:03.604Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'alath-trr',
            title: 'Alath-Trr',
            articleType: 'Character',
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '4ZcWF7p5nEDX7M0vxmIWTP',
                  type: 'Entry',
                  createdAt: '2024-05-07T01:48:58.449Z',
                  updatedAt: '2024-05-10T16:05:35.990Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Alath-Trr - Intro',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'The Alath-Trr ritual unfolds on the 14th day of ',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'Erhall',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [],
                            value: ', triggered by a formal request to the council. ',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'Paiirams',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [],
                            value:
                              " not put forward for Alath-Trr face execution at Erhall's end, an act viewed as an ultimate cowardice by Unity. Those nominated for Alath-Trr, be it by their guardians for minors or by their own volition, justify their desire for rebirth into ",
                            nodeType: 'text',
                          },
                          {
                            data: {
                              uri: 'unity-race',
                            },
                            content: [
                              {
                                data: {},
                                marks: [],
                                value: 'Unity',
                                nodeType: 'text',
                              },
                            ],
                            nodeType: 'hyperlink',
                          },
                          {
                            data: {},
                            marks: [],
                            value:
                              ' on day 13. The decision to undergo Alath-Trr lies with the divine, ensuring no applicant is turned away.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Following the selection of participants volunteers made necessary preparations within the ',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'secret cave',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [],
                            value:
                              ' for the Alath-Trr ritual. At the dawn of the 14th day, the ritual begins, placing paiirams in specially prepared holes deep enough to prevent escape.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Once all participants were settled in their respective holes, Unity withdrew, entrusting their fate to the divine. Despite their initial reactions, each participant would eventually enter a trance-like state, resembling deep slumber. Those who endured through the night would emerge marked with the ',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'purooth',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [],
                            value:
                              " symbol, signifying their successful rebirth. The ones who did not survive would be discovered embraced by thin roots, lifeless. Unity would reconvene at the site the following morning, 24 hours after the ritual's start, to greet the newly reborn members into Unity and to respectfully bury those who did not make it, filling their holes as their final resting places.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: '67XFKzrpDTdliZXp5c7KQj',
            type: 'Entry',
            createdAt: '2024-05-07T01:38:37.963Z',
            updatedAt: '2024-05-07T01:38:37.963Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'hiros-gwanos-hemp',
            title: 'Hiros and Gwanos Hemp',
            articleType: 'Character',
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '5jQNClsZLwbNtRwHSTPHl2',
                  type: 'Entry',
                  createdAt: '2024-05-07T01:24:53.428Z',
                  updatedAt: '2024-05-10T16:04:22.360Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Hiros and Gwanos Hemp - Intro',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'hyperlink',
                            data: {
                              uri: 'unity-race',
                            },
                            content: [
                              {
                                nodeType: 'text',
                                value: 'Unity',
                                marks: [],
                                data: {},
                              },
                            ],
                          },
                          {
                            nodeType: 'text',
                            value:
                              ' organizes itself into two primary groups to efficiently manage tasks and responsibilities: the Hiros, acting as guardians, while the Gwanos Hemp fulfills the dual role of nurturing children and providing a foundational home base for other members of Unity.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '6FWGyZ2YSfbU1kIvZuK4x6',
                  type: 'Entry',
                  createdAt: '2024-05-07T01:34:32.601Z',
                  updatedAt: '2024-05-10T16:04:46.657Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Hiros and Gwanos Hemp - Gwanos Hemp',
                  title: 'Gwanos Hemp',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Gwanos Hemp live together in significantly sized groups, relocating every three years to a new area within the jungle. This practice ensures sustainable resource use, preventing any single area from becoming depleted. They construct their temporary homes from locally sourced materials, taking only essential belongings with them during moves. While mainly consisting of ',
                            nodeType: 'text',
                          },
                          {
                            data: {
                              uri: 'luntha-nos',
                            },
                            content: [
                              {
                                data: {},
                                marks: [],
                                value: 'Luntha-Nôs',
                                nodeType: 'text',
                              },
                            ],
                            nodeType: 'hyperlink',
                          },
                          {
                            data: {},
                            marks: [],
                            value: ' and ',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'Inigs',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [],
                            value: ', the Gwanos Hemp also welcomes transitioning Hiros, ',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'Paiiram',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [],
                            value: ', ',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'Amuwegs',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [],
                            value:
                              ', though these groups are less common. The Gwanos Hemp play crucial roles within Unity, primarily focusing on facilitating the transition of Hiros from their former duties to their new roles within the Gwanos Hemp, providing housing and assimilating Paiirams into Unity culture, and most significantly, nurturing and raising the Inigs.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Camp Relocation',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'When the Gwanos Hemp need to relocate, they follow a systematic process:',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            content: [
                              {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    marks: [],
                                    value:
                                      'Scout teams of three are dispatched to identify and report back with potential new locations.',
                                    nodeType: 'text',
                                  },
                                ],
                                nodeType: 'paragraph',
                              },
                            ],
                            nodeType: 'list-item',
                          },
                          {
                            data: {},
                            content: [
                              {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    marks: [],
                                    value: 'The community then collectively decides on the next location.',
                                    nodeType: 'text',
                                  },
                                ],
                                nodeType: 'paragraph',
                              },
                            ],
                            nodeType: 'list-item',
                          },
                          {
                            data: {},
                            content: [
                              {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    marks: [],
                                    value:
                                      'At the appropriate time, about half of the Gwanos Hemp members set off to establish the new camp.',
                                    nodeType: 'text',
                                  },
                                ],
                                nodeType: 'paragraph',
                              },
                            ],
                            nodeType: 'list-item',
                          },
                          {
                            data: {},
                            content: [
                              {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    marks: [],
                                    value:
                                      "This initial group focuses on constructing a camp that meets the basic living requirements for everyone. It's during this phase that the new camp is named.",
                                    nodeType: 'text',
                                  },
                                ],
                                nodeType: 'paragraph',
                              },
                            ],
                            nodeType: 'list-item',
                          },
                          {
                            data: {},
                            content: [
                              {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    marks: [],
                                    value:
                                      'Once the preliminary setup is complete, three scouts return to the original camp to notify the remaining members.',
                                    nodeType: 'text',
                                  },
                                ],
                                nodeType: 'paragraph',
                              },
                            ],
                            nodeType: 'list-item',
                          },
                          {
                            data: {},
                            content: [
                              {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    marks: [],
                                    value:
                                      'The rest of the Gwanos Hemp then disassemble the existing camp, salvaging valuable items, and move to the new location.',
                                    nodeType: 'text',
                                  },
                                ],
                                nodeType: 'paragraph',
                              },
                            ],
                            nodeType: 'list-item',
                          },
                          {
                            data: {},
                            content: [
                              {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    marks: [],
                                    value:
                                      "Upon their arrival, the entire community joins forces to finalize the camp's construction, ensuring a smooth transition to their new home.",
                                    nodeType: 'text',
                                  },
                                ],
                                nodeType: 'paragraph',
                              },
                            ],
                            nodeType: 'list-item',
                          },
                        ],
                        nodeType: 'ordered-list',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Roles and Services',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "The roles within Gwanos Hemp, while collectively shared, often aligned with one's citizenship status, predisposing them to specific duties.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Luntha-Nôs',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-4',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "Luntha-Nôs primarily took on caregiving roles, nurturing and educating children, managing farms, and gathering resources. They served as the community's healthcare providers and played a key role in educating Paiirams.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Paiirams',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-4',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "Paiirams, depending on their educational background, participated in schooling alongside Inigs and received cultural training. Outside their studies, Aissans assigned them various tasks to support Gwanos Hemp's needs.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Amuwegs',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-4',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Amuwegs usually specialized in construction, goods production, or military defence, influenced by ',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'Kitnapanas',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [],
                            value:
                              "' specialized schools in these areas. The inviting culture of Kitnapanas encouraged Amuwegs to settle there, offering them the liberty to choose their paths. Transitioning to Gwanos Hemp for Amuwegs often symbolized a commitment to service, a decision held in high esteem in Unity for embodying a selfless creed. In embracing the Gwanos Hemp way of life, they dedicated themselves to the well-being of others, embodying the community's protective spirit.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '42D1MdqTyfOkB8uNwpEO5o',
                  type: 'Entry',
                  createdAt: '2024-05-07T01:35:34.579Z',
                  updatedAt: '2024-05-10T16:05:15.536Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Hiros and Gwanos Hemp - HIROS',
                  title: 'Hiros',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'The Hiros work in compact squads, usually consisting of about ten members, assigned to patrol either the jungle or its coastlines. This assignment is determined by the type of their ',
                            nodeType: 'text',
                          },
                          {
                            data: {
                              uri: 'felthairam',
                            },
                            content: [
                              {
                                data: {},
                                marks: [],
                                value: 'felthairam',
                                nodeType: 'text',
                              },
                            ],
                            nodeType: 'hyperlink',
                          },
                          {
                            data: {},
                            marks: [],
                            value:
                              ', with its variant dictating whether they oversee the dense forest interior or the adjacent shorelines. Their overarching goal is to preserve both the ecological and spiritual balance of Malatra, remaining vigilant and active, except during periods of rest or meal times.',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'Elaborate on Hiros',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: '4Dyc6jIrQ1FNoP4r3wIDNz',
            type: 'Entry',
            createdAt: '2024-05-07T00:51:51.362Z',
            updatedAt: '2024-05-07T01:04:21.239Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 3,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'humul-tress',
            title: 'Humul Tress',
            articleType: 'Character',
            infobox: {
              metadata: {
                tags: [],
              },
              sys: {
                space: {
                  sys: {
                    type: 'Link',
                    linkType: 'Space',
                    id: '5kn4tnxc24n7',
                  },
                },
                id: '22qwDnJY7Jpnnz4tcHMJTT',
                type: 'Entry',
                createdAt: '2024-05-07T01:04:16.373Z',
                updatedAt: '2024-05-07T01:04:16.373Z',
                environment: {
                  sys: {
                    id: 'master',
                    type: 'Link',
                    linkType: 'Environment',
                  },
                },
                revision: 1,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'infobox',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                entryTitle: 'General Information',
                blocks: [
                  {
                    metadata: {
                      tags: [],
                    },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: '5kn4tnxc24n7',
                        },
                      },
                      id: '450Q5GGUsSRvqKTQPaSZ9U',
                      type: 'Entry',
                      createdAt: '2024-05-07T01:04:12.418Z',
                      updatedAt: '2024-05-07T01:04:12.418Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      contentType: {
                        sys: {
                          type: 'Link',
                          linkType: 'ContentType',
                          id: 'infoboxBlock',
                        },
                      },
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'Biology',
                      items: [
                        {
                          metadata: {
                            tags: [],
                          },
                          sys: {
                            space: {
                              sys: {
                                type: 'Link',
                                linkType: 'Space',
                                id: '5kn4tnxc24n7',
                              },
                            },
                            id: '7ioATo4uVlYfB1w9hzCjmq',
                            type: 'Entry',
                            createdAt: '2024-05-07T01:00:30.125Z',
                            updatedAt: '2024-05-07T01:00:30.125Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                              },
                            },
                            revision: 1,
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'infoboxItem',
                              },
                            },
                            locale: 'en-US',
                          },
                          fields: {
                            title: 'Life Span',
                            description: '150 years',
                          },
                        },
                        {
                          metadata: {
                            tags: [],
                          },
                          sys: {
                            space: {
                              sys: {
                                type: 'Link',
                                linkType: 'Space',
                                id: '5kn4tnxc24n7',
                              },
                            },
                            id: '5bsxEKdqvtZMTGp74B287R',
                            type: 'Entry',
                            createdAt: '2024-05-07T01:01:19.703Z',
                            updatedAt: '2024-05-07T01:01:19.703Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                              },
                            },
                            revision: 1,
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'infoboxItem',
                              },
                            },
                            locale: 'en-US',
                          },
                          fields: {
                            title: 'Average Adult Height',
                            description: '8ft-12ft Height',
                          },
                        },
                        {
                          metadata: {
                            tags: [],
                          },
                          sys: {
                            space: {
                              sys: {
                                type: 'Link',
                                linkType: 'Space',
                                id: '5kn4tnxc24n7',
                              },
                            },
                            id: 'sTzQi7wjAxVTQeZ6kSaAD',
                            type: 'Entry',
                            createdAt: '2024-05-07T01:03:06.395Z',
                            updatedAt: '2024-05-07T01:03:06.395Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                              },
                            },
                            revision: 1,
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'infoboxItem',
                              },
                            },
                            locale: 'en-US',
                          },
                          fields: {
                            title: 'Average Adult Length',
                            description: '10ft',
                          },
                        },
                        {
                          metadata: {
                            tags: [],
                          },
                          sys: {
                            space: {
                              sys: {
                                type: 'Link',
                                linkType: 'Space',
                                id: '5kn4tnxc24n7',
                              },
                            },
                            id: '7zkkiP96l7thVeiwj8NHRi',
                            type: 'Entry',
                            createdAt: '2024-05-07T01:02:30.571Z',
                            updatedAt: '2024-05-07T01:02:30.571Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                              },
                            },
                            revision: 1,
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'infoboxItem',
                              },
                            },
                            locale: 'en-US',
                          },
                          fields: {
                            title: 'Average Adult Weight',
                            description: '12,000 lb',
                          },
                        },
                        {
                          metadata: {
                            tags: [],
                          },
                          sys: {
                            space: {
                              sys: {
                                type: 'Link',
                                linkType: 'Space',
                                id: '5kn4tnxc24n7',
                              },
                            },
                            id: '3RCkhZG5LPZ9AP3sK1biU9',
                            type: 'Entry',
                            createdAt: '2024-05-07T01:03:59.078Z',
                            updatedAt: '2024-05-07T01:03:59.078Z',
                            environment: {
                              sys: {
                                id: 'master',
                                type: 'Link',
                                linkType: 'Environment',
                              },
                            },
                            revision: 1,
                            contentType: {
                              sys: {
                                type: 'Link',
                                linkType: 'ContentType',
                                id: 'infoboxItem',
                              },
                            },
                            locale: 'en-US',
                          },
                          fields: {
                            title: 'Body Tint, Colouring and Marking',
                            description: 'TO BE WRITTEN!',
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '7xDNRo8F6b5sWDXsnuMfZN',
                  type: 'Entry',
                  createdAt: '2024-05-07T00:45:44.610Z',
                  updatedAt: '2024-05-10T16:01:55.008Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Humul Tress - Intro',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "The Humul Tess are majestic, giant snails residing primarily in the ocean's abyss, known for their massive, sparkling shells which are not only formidable in strength but also house a unique gem. This gem, akin to an opal, exhibits a mesmerizing array of colors and emits a soft, ethereal glow, making it highly sought after and valuable on the market.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Despite their deep-sea habitat, Humul Tess are occasionally found along the shores of Malatra, where they exhibit unusual behavior by congregating in one large group, sometimes numbering around 50. This gathering in shallow waters, where the distance from the top of their shells to the waterline matches their own size, are not typical of their kind.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'As Humul Tess navigate the shallow shores, they reveal themselves partially from their shells, casting a light glow, with their exteriors marked by streaks that glow in multi-colors, reminiscent of veins. The material responsible for their luminous quality builds up significantly within their bodies over a lifetime, eventually seeping out onto the surface of their shells, crystallizing into the shapes of gems.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "The egg-laying ritual of the Humul Tess underscores a significant part of their life cycle. Humul Tess from the deep ocean will lay their eggs on Malatra's shores if it happens to be the closest suitable location, while those already living on Malatra's shores naturally lay their eggs there as well. When some of these eggs encounter the eternal roots, they are imbued with a Purooth, influencing a change in behavior that compels them to stay within the shores of Malatra. Hatchlings bearing a Purooth set off on a relentless quest to find their counterparts.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "The structure of the Humul Tess's shell creates an ideal habitat for coral reefs to flourish, turning these congregations into living, moving coral ecosystems. From afar, these groups resemble undulating coral reefs, camouflaging the Humul Tess within the marine landscape and contributing to their survival. This symbiotic relationship benefits the coral organisms by periodically transporting them to new, nutrient-rich areas with each full moon, ensuring a dynamic and thriving ecosystem.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Migration for the shore-dwelling Humul Tess is a meticulous and considerate process, occurring solely during full moons. They move in a harmonized sequence, each waiting for the other to advance to avoid disrupting the vibrant life thriving on their shells.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'Unknowingly, they migrate towards high concentration of Eternal Roots.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '21jSMy12bgNtwVErclfh8L',
                  type: 'Entry',
                  createdAt: '2024-05-07T00:48:41.124Z',
                  updatedAt: '2024-05-10T16:02:19.089Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Humul Tress - Anatomy',
                  title: 'Anatomy',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'The anatomy of the Humul Tess, a giant snail of the deep, is a marvel of natural engineering, perfectly adapted to its aquatic environment.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Illumination & Its Formed Gems',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "The skin of the Humul Tess is as delicate as it is fragile, necessitating the protection afforded by their remarkably dense and sturdy shells. Embedded within their skin are opalescent streaks, dynamic in colour and luminosity, responding vividly to changes in light and viewing angle. These streaks, possess a subtle glow that intensifies when wet. This glow is the visible expression of a special material produced internally, which accumulates over the creature's lifespan. Eventually, this material overflows, crystallizing into gem-like formations that embed within the shell, gradually migrating to its surface to offer a spectacle of radiant beauty. The presence and abundance of these gems serve as a testament to the age of the Humul Tess, with older individuals displaying a more pronounced and captivating brilliance.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Their Eyes',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "Equipped with four eyes, these creatures possess a panoramic view of their surroundings. The Humul Tress's eyes are exquisitely optimized for environments devoid of light, allowing them to inhabit the most shadowed realms of the ocean. These snails can thrive in absolute darkness, relying on the bioluminescent streaks that adorn their bodies to illuminate their path. The light emitted from these streaks provides sufficient visibility for the Humul Tress, ensuring they can navigate, find food, and interact with their kind in areas completely bereft of external lighting.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Feeding Tentacles',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Located on the upper part of their bodies, small, short tentacles play a crucial role in the survival of the Humul Tress. Gracefully navigating through the vegetation that clings to their living quarters, these tentacles act as meticulous cleaners, collecting and consuming waste with their tiny, sticky hairs coated in enzymes that break down organic matter for absorption.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '6rsHnm4PXOwny5HHsrzLfR',
                  type: 'Entry',
                  createdAt: '2024-05-07T00:53:47.235Z',
                  updatedAt: '2024-05-10T16:02:40.661Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Humul Tress - Reproduction',
                  title: 'Reproduction',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "The Humul Tess exhibit a unique and intricate process for reproduction, marked by a series of carefully orchestrated stages leading to the birth of a Humul Guave, their offspring. During the ovulation stage, a female Humul Tess produces an egg, which she then secures within the deepest part of her shell. Here, she begins the delicate task of crafting a protective shell around the egg. This new shell is designed with a rough exterior for protection and a smooth interior to cradle the egg gently. The female's shell is notably larger than that of her male counterparts, a necessary adaptation to accommodate the developing egg and its nurturing shell. It's noteworthy that the egg's shell lacks the characteristic gem-like crystals found on adult shells, focusing instead on nourishment and safety. Unlike the hard, gem-encrusted shells that Humul Tess eventually grow, the egg's shell is softer and rich in nutrients, ensuring the well-being of the emerging Humul Guave.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'For those who reside along the shores of Malatra, females, bearing the future of their species, find safety in numbers, positioning themselves at the center of their community. This strategic placement within the group provides maximum protection for the vulnerable eggs.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "The culmination of this reproductive journey aligns with the last full moon of the annual cycle, when the Humul Tess migrate to a predetermined location along Malatra's shores, echoing the site of their own birth. Upon hatching, the Humul Guave utilizes its tentacles, adept at breaking down organic matter, to consume part of its initial shell. This act of emerging frees the young snail while leaving behind a fragment of the shell for temporary protection, which they adhere to themselves with a sticky substance produced by their bodies. This makeshift shell serves as a sanctuary until the Humul Guave can secure a safer location to develop its permanent shell.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "A pivotal moment in the Humul Tess's reproduction is the fertilization process, signaled by the female's deep, resonant growl. This mating call is a unique frequency that Humul Tess can detect from distances up to 100km away, thanks to their specialized sensory abilities. While the growl is specifically designed to be heard by Humul Tess, those not of their kind can still perceive it, though at a significantly reduced range of about 10km. This call to mate prompts the males to leave their shells and engage in a display intended to attract the female's attention, showcasing their size and the vibrancy of their streaks. Upon selecting a mate, the female makes the initial contact using her feeding tentacles before positioning herself atop the male. In a synchronized dance, the male uses his sexual organ, located on his back and resembling a feeding tentacle, to reach the egg as the female moves it towards the entrance of her shell. Fertilization occurs within this intimate embrace.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "Following the successful fertilization, the female retracts the fertilized egg deeper into her shell, signaling the conclusion of their union. As she begins to disengage, the male releases her, allowing the female to retreat fully into her shell and resume her protective role over the developing egg. This meticulous and intimate process underscores the complexity and beauty of the Humul Tess's life cycle, ensuring the continuation of their species along the enchanted shores of Malatra.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '4uy5K1kfpAXulVyc92i6ne',
                  type: 'Entry',
                  createdAt: '2024-05-07T00:54:16.374Z',
                  updatedAt: '2024-05-10T16:02:54.545Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Humul Tress - Growth Stages',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'Hatchlings bearing a Purooth set off on a relentless quest to find their counterparts. ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              'Describe how defencless they are until they can make their own shell and how they are never hunter for their shell at such an early age ',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '3oEUCufrU135QeTmLCxicO',
                  type: 'Entry',
                  createdAt: '2024-05-07T00:55:01.683Z',
                  updatedAt: '2024-05-10T16:03:06.769Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Humul Tress - Ecology and Habitats',
                  title: 'Ecology and Habitats',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Humul Tess are typically found in the Deepest parts of the ocean. ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'Elaborate on this',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '\n',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '2uA6tEpLTGBavK427azDRU',
                  type: 'Entry',
                  createdAt: '2024-05-07T00:56:36.779Z',
                  updatedAt: '2024-05-10T16:03:40.200Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Humul Tress - Uses, Products & Exploitation',
                  title: 'Uses, Products & Exploitation',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'They are hunted for their',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '5nGkFRErJYiHR6NEq25iWQ',
                  type: 'Entry',
                  createdAt: '2024-05-07T00:57:53.726Z',
                  updatedAt: '2024-05-10T16:03:54.780Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Humul Tress - Symbiotic',
                  title: 'Symbiotic',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Need to add things!',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '3qWISZfl1ZClFNu8XjjW5m',
                  type: 'Entry',
                  createdAt: '2024-05-07T00:58:42.924Z',
                  updatedAt: '2024-05-10T16:04:04.683Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Humul Tress - Waste',
                  title: 'Waste',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'As the Humul Tess moves, it secretes waste accumulated during periods of inactivity, releasing it in droplets that enrich the marine ecosystem. This secretion nourishes other sea life and, significantly, feeds the eternal roots of Malatra.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: '6RN59uxM2wAU3jyVTiQEHn',
            type: 'Entry',
            createdAt: '2024-05-06T23:42:47.513Z',
            updatedAt: '2024-05-06T23:42:47.513Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'luntha-nos',
            title: 'Luntha-Nôs',
            articleType: 'Character',
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '598sMZUf84qOM8oTHMa2U',
                  type: 'Entry',
                  createdAt: '2024-05-06T23:16:49.701Z',
                  updatedAt: '2024-05-10T15:59:35.226Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Luntha-Nôs - CHARACTERISTICS',
                  title: 'Characteristics',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'At the onset of Luntha-Nôs felthairam activation, their eyes undergo a dramatic colour change, adopting any hue. Subsequently, orange tribal markings appear on their skin.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: 'XZe8ZMDSabYBdYDL2wqKu',
                  type: 'Entry',
                  createdAt: '2024-05-06T23:40:38.036Z',
                  updatedAt: '2024-05-10T16:01:12.186Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Luntha-Nôs - ABILITIES',
                  title: 'Abilities',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'The abilities they gain include accelerating the growth of plants and trees. Lastly, they gain the capacity for minor healing, benefiting animals, humanoids, and themselves.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'Their Queltha ...',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: '6Yf5jzhE1t3KpnOuFpETny',
            type: 'Entry',
            createdAt: '2024-05-06T20:01:25.044Z',
            updatedAt: '2024-05-06T20:01:25.044Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'amro-hom',
            title: 'Amro Hôm',
            articleType: 'Character',
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '3kEsMGbzWu2PdAlaPKSIjs',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:38:24.561Z',
                  updatedAt: '2024-05-06T19:38:24.561Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Amro Hôm - Intro',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'In the initial phase of Amro Hôm felthairams activation, their head and facial hair start to mimic the appearance of moss found on trees. Over time, they also develop patches of scale-like skin that resembles tree bark.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: 'vJMou0nx3n312As2arXFQ',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:38:49.938Z',
                  updatedAt: '2024-05-10T15:53:20.353Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Amro Hôm - ABILITIES',
                  title: 'Abilities',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'This transformation into having moss-like hair and bark-like skin grants them exceptional stealth capabilities in the jungle. Additionally, the bark-like scales enhance their resilience, fortifying them against the elements and potential threats.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'Their Queltha ...',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '4f2VRM90fttnMZbTJQnfZb',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:39:40.074Z',
                  updatedAt: '2024-05-10T15:54:35.342Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Amro Hôm - RESPONSIBILITIES: AS HIROS',
                  title: 'Responsibilities: As Hiros',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "The Amro Hôm play a crucial role in the stewardship of Malatra's jungle, tasked with patrolling and maintaining the delicate ecological balance of this vast wilderness. Operating in cohesive units of 8 to 10 members, these groups adapt their size based on the specific demands of the region they are safeguarding. Their responsibility encompasses a significant expanse of territory, necessitating daily relocation to effectively oversee the protection of the area. The Amro Hôm move as a single entity, deeply committed to the preservation of wildlife and their habitats. They act as guardians against any form of resource extraction, ensuring the jungle's resources remain untouched and its ecosystems thrive undisturbed. Through their vigilant patrol and protective measures, the Amro Hôm embody the essence of conservation, playing a vital role in the survival and prosperity of Malatra's natural world.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Friendly Encounters',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Upon encountering individuals within its domain, the Amro Hôm invest considerable time in stealthily observing them from the shadows. They meticulously assess behaviors and inspect equipment to ascertain whether these individuals belong to Malatra and to understand their purposes within the jungle. This careful scrutiny is pivotal in discerning the intentions of those they come across, ensuring the safety and balance of Malatra are preserved.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "Upon encountering individuals who appear to be harmless residents of Malatra, the Amro Hôm discreetly make their presence known, extending offers of assistance tailored to the immediate needs of the group. This aid can encompass a variety of services, including provision of food and water, medical aid, guidance for navigation, among other supports within their capability. Whether or not an explicit request for an escort is made, the Amro Hôm take it upon themselves to silently follow the group, ensuring their safe passage through the jungle up to the boundary of their patrol and protection zone. This hidden escort underscores the Amro Hôm's commitment to the welfare of Malatra's inhabitants, providing unseen guardianship and aid.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "If the Amro Hôm encounter a group of Hiros escorting captives, a seamless transition occurs where the captives are handed over to the Amro Hôm. This procedure ensures the escort mission continues under the supervision of the new group. This handover is rooted in the operational framework within Malatra, where each group of Hiros is tasked with safeguarding a specific territory. Encountering another group implies that one has ventured beyond their assigned area. This is not viewed as an infraction but rather a part of their duties; should Hiros find themselves escorting captives across territories, they proceed until they meet another group. At this juncture, the captives are transferred, allowing the new group to carry on with the escort, ensuring the captives' journey is managed by those currently within their rightful jurisdiction.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'High Risk Elites: Near the Malatra border & Near Kitnapana',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "The regions adjacent to the northern border of Malatra and the vicinity of Kitnapana are critical zones where the presence of groups numbering 10 is a common sight. These groups, primarily composed of the skilled Amro Hôm, are assigned to areas recognized for their high risk, necessitating experienced guardians to maintain security and balance. The strategic positioning along Malatra's border serves a dual purpose: it acts as a barrier to ensure that incoming visitors do not disrupt the delicate balance of the ecosystem or venture too deeply into forbidden territories, and it serves to deter or capture those attempting to leave without the requisite permissions. Only individuals marked with a purooth or those manifesting the characteristics of a felthairam are granted the freedom to pass.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "The vigilance near Kitnapana, however, stems from a different concern. There, the guard is intensified to counteract the potential greed of those within Kitnapana, who, driven by forgotten principles of Unity, might seek to exploit the jungle's resources excessively. This protective measure underscores a profound reminder: even those who have long resided within the embrace of Kitnapana must adhere to the core values of Unity, respecting the natural wealth of Malatra without succumbing to the temptations of overexploitation.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '6KCLsx80yUciddg7tz5hSK',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:41:25.268Z',
                  updatedAt: '2024-05-10T15:55:48.740Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Amro Hôm - LIFE AND LORE: AS HIROS',
                  title: 'Live And Lore: As Hiros',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Social Ways',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "The Amro Hôm, with their reserved nature, stand as a symbol of stealth and discretion. Their lifestyle is characterized by a profound silence, a conscious choice to minimize sound and avoid alerting others to their presence. This quietness isn't just a means of concealment; it also sharpens their ability to discern the subtlest noises, from the rustle of leaves to the distant footsteps of approaching entities, enhancing their awareness and connection to their surroundings.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'When it comes to fire, the Amro Hôm exercise great care. Their fires are modest, serving the purpose without risking visibility or detection. These fires are extinguished swiftly after use, and the group relocates, mindful that smoke could betray their location. This practice reflects their deep understanding of the environment and the need to coexist without leaving traces that might lead others to them.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "Communication within the Amro Hôm is a practice of silent artistry, achieved through a unique sign language universally understood among them. This form of expression was initially crafted for tactical advantages in combat, allowing them to convey complex messages without making a sound. This silent language allowed them to coordinate and strategize without revealing their positions or intentions. Over time, this method of communication has transcended its initial martial purpose, becoming the preferred means of interaction within the Amro Hôm. This evolution from a tool of war to a cornerstone of their daily life illustrates the Amro Hôm's adaptability and their commitment to a lifestyle where silence is not just a strategy but a principle.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Resting Preferences',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'The sleeping practices of the Amro Hôm are a testament to their ingenuity and deep connection with their environment. They find rest high in the trees, on their shields, which are ingeniously designed to split and expand. These shields are then suspended from tree branches with ropes, creating a makeshift bed that keeps them elevated and secure throughout the night. Resting on their shields elevated above the ground provides protection against potential attacks from below during their most vulnerable moments of rest. This method not only provides safety from terrestrial dangers but also aligns with their ethos of minimal environmental impact.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'In situations where a shield is lost or rendered unusable due to damage, they adapt by sleeping directly on the jungle floor. They use branches and various natural materials found in the jungle to camouflage and protect themselves, blending seamlessly into the forest floor.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '7pYiowNOvXCSuxsCGy7c9q',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:46:05.961Z',
                  updatedAt: '2024-05-10T15:53:56.165Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Amro Hôm - TYPICAL WEARABLE: AS HIROS',
                  title: 'Typical Wearable: As Hiros',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Clothing',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'The Amro Hôm are a testament to adaptability and resourcefulness, crafting their own clothing and equipment even as they traverse the diverse landscapes of their realm. Their attire is a direct reflection of the environment, meticulously assembled from materials sourced from the jungle itself. Utilizing bark, thick leaves, and sticks, along with other plant matter, they construct garments uniquely suited to their nomadic lifestyle. The creation of thread involves the delicate art of weaving fibers extracted from the innards of thick leaves, a skill passed down through generations that showcases their deep understanding of the natural resources at their disposal.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'In addition to plant-based materials, the Amro Hôm also incorporate animal hides into their wardrobe, processed from the game they hunt for sustenance. This not only provides them with a durable alternative to leaf and bark but also ensures that no part of their hunt goes to waste, aligning with their principles of respect and efficiency toward nature.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Transporting goods',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Every Amro Hôm personally crafts their backpack, a vital tool for carrying their essentials. These backpacks are made from the same environmentally sourced materials used in their clothing, such as bark, thick leaves, sticks, and other plant matter, demonstrating their unparalleled adaptability and resourcefulness.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Crafting & Repairable',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'The Amro Hôm carry with them an array of tools that enable them to craft and repair their weapons, shields, and clothing. These tools, much like their attire and equipment, are forged from the bounty of the jungle, embodying the essence of resourcefulness that defines their culture. Utilizing everything from sharpened stones and hardened wood to fibres and resins collected from their surroundings, they create implements that are as durable as they are effective.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "This toolkit allows the Amro Hôm to maintain their gear in optimal condition, ensuring they are always ready for whatever challenges they may face. Whether it's mending a tear in their clothing, sharpening a blade, or reinforcing a shield, these tools are indispensable for their way of life.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Sling & Stone',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'The Amro Hôm possess a uniquely crafted sling, capable of launching rocks with exceptional speed and accuracy over great distances, serves multiple purposes within their society, from combat to a novel form of communication. In the thick foliage of their environment, where visual contact can often be obscured, this sling becomes an invaluable asset.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "In instances of separation from the group, an Amro Hôm can use the sling to send a distinct message back to their comrades. By slinging a rock to strike a tree or another hard surface, the resultant knocking sound acts as a prearranged signal. This sound, sharp and clear against the backdrop of the jungle's natural chorus, is a call for immediate vigilance and concealment among the group members. It alerts them to potential danger or points of interest, allowing for a swift, coordinated response without the need for vocal communication that could betray their presence.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Weapons',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'The weaponry of the Amro Hôm is a testament to their innovative craftsmanship and deep understanding of the resources offered by their environment. Constructed from a harmonious blend of hard wood, bone, and threads spun from the fibres of thick leaves, their weapons are as formidable as they are a reflection of the jungle’s bounty. The hard wood provides a sturdy base, offering resilience and strength, while the bone, carefully shaped and honed, delivers a lethal edge or point to their tools of defence and hunting.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Their arsenal reflects this tactical mindset, favouring weapons that allow for versatility and adaptability. The staff and short bow emerge as their primary tools of engagement, offering them the range and flexibility needed to control the battlefield from a distance. Complementing these are a dagger and a shield, the former for close encounters where finesse and agility are paramount, and the latter for defence, enabling them to protect themselves and maneuver with ease. Together, these weapons form a comprehensive kit that empowers the Amro Hôm to navigate combat scenarios with confidence, blending stealth, agility, and strategic insight to overcome adversaries.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Shield',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'The shield wielded by the Amro Hôm is a marvel of design and functionality, emblematic of their adaptability and tactical ingenuity. Comprising two primary sections, this shield is more than a mere tool of defense; it is a versatile instrument tailored to the changing dynamics of combat and survival. Each section serves as a layer, overlapping with a deliberate offset that provides both comprehensive protection and strategic utility. The upper, exterior layer is equipped with a slit, ingeniously allowing the bearer to maintain visibility while fully guarded, a critical advantage in the dense and unpredictable environment of the jungle.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "The integration of the handle is a testament to the shield's innovative design. Inserted between the two layers and secured by a simple twist, it locks the pieces together, transforming the shield into a solid, maneuverable defence mechanism. The height of each primary piece, roughly half that of its wielder, ensures that the shield offers substantial coverage without hindering mobility.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "Perhaps the most unique feature lies in the three small gnubs positioned along the bottom of the inner layer. These gnubs permit the Amro Hôm to anchor the shield into the ground and use it as a platform. By standing with one foot on the shield and the other on the handle, they can elevate themselves, overcoming their stature to survey the jungle terrain and spot challenges or threats that lie beyond the undergrowth. This multifunctionality not only highlights the shield's role in enhancing the Amro Hôm's combat capabilities but also underscores its contribution to their overall survival strategy in the dense foliage of their homeland.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "Innovating further on the design of the Amro Hôm's shield, the bottom of the exterior layer is equipped with holes, diverging from the gnubs on the interior. These holes ingeniously allow for the two primary layers of the shield to be connected, creating a singular, elongated piece. Additionally, each layer features two holes near its bottom edge, positioned to facilitate the secure fastening of the layers once they are aligned. This functionality serves two critical purposes, enhancing the shield's utility beyond traditional defence mechanisms.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'First, the combined and secured layers can be transformed into a stretcher, enabling the Amro Hôm to transport individuals who are injured or otherwise unable to move. This adaptability is vital in their often perilous environment, ensuring that no one is left behind during expeditions or in the aftermath of conflict. Second, this configuration can also be utilized as a makeshift bed, providing a flat surface for rest. Such versatility is crucial for the nomadic lifestyle of the Amro Hôm, allowing them to maintain mobility without sacrificing comfort or safety.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "Moreover, each corner of the shield is punctuated by a hole, a design choice that significantly expands the shield's functionality. These holes are specifically intended for the shield to be suspended from tree branches, using ropes made from the woven fibers of thick leaves. This feature not only allows for elevated sleeping arrangements, safeguarding against ground-based hazards but also contributes to the strategic positioning of the shield for surveillance or defense. Through these thoughtfully designed holes and the ability to combine shields, the Amro Hôm have crafted a piece of equipment that is as versatile as it is essential, supporting their survival, comfort, and readiness in the diverse challenges posed by their jungle home.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '5wvr4T8o1KjyrNgigE99Gz',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:49:51.743Z',
                  updatedAt: '2024-05-10T15:56:01.542Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Amro Hôm - COMBAT',
                  title: 'Combat',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Combative Style',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'The Amro Hôm are distinguished by their unique approach to combat, embodying qualities reminiscent of both rogues/archers and druids. This blend of fighting styles emphasizes their preference for meticulous strategy and rational execution over brute force. In battle, they exhibit a remarkable patience, carefully assessing the situation to identify the optimal moment for engagement. This methodical approach ensures that when they do strike, it is with decisive precision and effectiveness.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Tactics',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'The Amro Hôm employ sophisticated tactics when facing threats, prioritizing cunning and strategy over brute force. Their initial approach is to deter adversaries through intimidation, utilizing their deep knowledge of the jungle and its inhabitants. If this fails to dispel the threat, they resort to confusion, meticulously orchestrating their movements to mislead and disorient before launching a surprise assault.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "The intimidation tactic leverages their deep familiarity with the jungle's auditory landscape. The Amro Hôm disperse into premeditated positions, harnessing their skill in mimicking the sounds of the jungle's most formidable creatures. This ability is honed during their time as Hiros, where they master the art of emulating animal calls using their voices, handmade tools, or the natural acoustics of their environment. Sometimes, they employ a combination of these methods to create a convincing cacophony of danger, aiming to persuade the intruder to retreat from Malatra.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "Should this approach not yield the desired effect, they shift to a strategy of distraction. A select few Amro Hôm utilize their slings to subtly launch rocks beyond their target, carefully timing each throw to simulate the sound of movement through the underbrush. This orchestrated illusion of an unseen presence aims to redirect the attention of the threat away from their actual location. Once the adversary's focus is sufficiently diverted, the Amro Hôm seize the moment to launch a surprise attack.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '7C9x68eWEheD8ZpaQziu9I',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:55:16.047Z',
                  updatedAt: '2024-05-10T15:58:33.886Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Amro Hôm - Capture & Release',
                  title: 'Capture & Release',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "A crucial consideration in the fate of captives is their number relative to the available Amro Hôm, with strict adherence to not overseeing more than one adult per Amro Hôm and aiming for a two children per Amro Hôm ratio. This policy ensures each captive receives adequate supervision during their release or escort to Gwanos Hemp. However, it's important to note that children are always spared from execution, regardless of the ratio. This unwavering principle guarantees the safety and protection of the youngest captives under all circumstances. Overcapacity among adults may lead to the difficult decision of executing the oldest, based on the belief that with age should come the wisdom to avoid such perilous situations.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Near The Northern Border Of Malatra',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Special Masks and the Art of Intimidation',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-4',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "The Amro Hôm's strategies for patrolling and safeguarding the northern border of Malatra are as varied as they are meticulously planned, tailored to the specific challenges and threats of each area they are assigned to. Near the imposing northern border, they adopt an approach rooted in psychological warfare, donning terrifying masks before any engagement. These masks serve not just to intimidate those they encounter directly but to sow seeds of fear and deterrence, encouraging tales of terror that dissuade others from venturing into Malatra's depths.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Guidelines Regarding Captives',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-4',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "In the event of capturing those who have trespassed, the Amro Hôm employ a clear protocol to determine their fate, balancing between execution and release. They would be executed if observed or believed to have committed a heinous crime by Unity's standards, or if identified as Sônha or displaying a Purooth and their presence near the northern border of Malatra is deemed to contravene Unity's codes of conduct. However, children are exempt from such grim outcomes, reflecting a profound respect for innocence; they are either released with an adult or, in the absence of a suitable guardian, taken to the nearest Gwanos Hemp for care.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "The method they use for releasing captives is deliberately designed to leave a lasting impression of fear. The Amro Hôm go to great lengths to ensure captives never wish to return, escorting them blindfolded, gagged, and bound. Upon arrival at the release point, they might place the bodies of executed individuals near the captives before setting them free, alongside drawing a clear arrow on the ground pointing towards Malatra's exit. This intense experience, coupled with the potential sight of an Amro Hôm wearing a fearsome mask and possibly stained with blood, is meant to motivate the captives to flee and discourage them from ever coming back. Should a captive hesitate, the sight of an Amro Hôm approaching, possibly blood-stained and readying a dagger, is usually enough to spur them into flight. Yet, in cases where fear paralyzes them to inaction, the preference is always to return them to Gwanos Hemp rather than to take a life unjustly.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Artifacts Of Caution',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-4',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Items or objects not naturally found in the Malatra Jungle, remnants of past encounters, are deliberately left undisturbed where they fall. These artifacts serve as silent warnings to anyone who stumbles upon them, signalling that they have ventured into perilous territory. The presence of these objects implies a watchful eye lurking in the shadows, reminding all who come across them to tread carefully, as they might not be alone. This strategy subtly reinforces the notion of vigilance and the potential for danger, effectively deterring unwelcome exploration.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Everywhere Else',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Guidelines Regarding Captives',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-4',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "When Amro Hôm capture individuals believed to have violated Unity's principles through heinous acts, a strict protocol is followed, which does not discriminate between Sônha or Amuweg. Such individuals are executed based on the gravity of their perceived crimes, reflecting Unity's stringent enforcement of its moral and legal codes.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Captives, on the other hand, undergo a different process. They are transported to the nearest Gwanos Hemp with their hands bound and mouths gagged to prevent any potential escape or communication that might jeopardize the escorting Amro Hôm or the integrity of the process. Upon arrival, different treatments are accorded based on their community affiliations: Paiirams are integrated directly, whereas Sônha and Amuwegs are presented before the Aissans of Gwanos Hemp. It is here that they must advocate for their innocence in a system that presumes them guilty from the outset.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "In scenarios where the number of captives exceeds the Amro Hôm's capacity to manage them effectively, a distinct hierarchy determines the prioritization for execution, if it becomes necessary. At the top of this hierarchy are children, who, regardless of their affiliation, are never executed. Following the protection of children, the order of priority is Sônha, Amuwegs, and then Paiirams.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Artifacts Left Behind',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-4',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Items or objects not naturally found in the Malatra Jungle and left behind from encounters are intentionally gathered and placed in open areas. This arrangement facilitates individuals or businesses from Kitnapana to retrieve these goods, turning it into a potentially lucrative, albeit risky, venture. The practice of collecting these foreign objects has become a known endeavor within Kitnapana, attracting those willing to brave the dangers for the sake of profit. This not only benefits Kitnapana but also helps clean up Malatra.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: '6Pw5kwSz0bHsaAIC3gnfH5',
            type: 'Entry',
            createdAt: '2024-05-06T19:29:17.771Z',
            updatedAt: '2024-05-06T19:33:01.659Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'endlesin-glen',
            title: 'Endlesin Glen',
            articleType: 'Generic',
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '2vM0fOirdgeB1RVqhCAhO2',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:20:49.797Z',
                  updatedAt: '2024-05-06T19:29:27.665Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Endlesin Glen - Intro',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'As the felthairams of Endlesin Glen activate, their skin starts to subtly shift to a light blue hue. Simultaneously, a delicate layer of webbing forms between their fingers, extending halfway up their hands.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '6cGYRFVK4PBkpNPAfgg18p',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:21:43.178Z',
                  updatedAt: '2024-05-10T18:59:37.583Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Endlesin Glen - Abilities',
                  title: 'Abilities',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'This adaptation bestows upon them the capacity to swim swiftly, courtesy of their webbed hands. Following this, they acquire the remarkable ability to hold their breath for extended periods, enhancing their aquatic prowess.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Their Queltha ...',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '6KN2xuyjTxoe9C52NqbnQP',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:22:56.565Z',
                  updatedAt: '2024-05-10T15:56:37.287Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Endlesin Glen - RESPONSIBILITIES: AS HIROS',
                  title: 'Responsibilities: As Hiros',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'The Endlesin Glen hold the esteemed duty of patrolling the coastline, maintaining the delicate balance of their assigned territories. Operating in cohesive units of 10 to 12 members, they are allocated specific areas to safeguard. Their strategy involves splitting into pairs to cover more ground, seamlessly blending into the marine environment. These vigilant pairs dive beneath the waves, dedicating themselves to the protection of the local wildlife and the preservation of the underwater ecosystem.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "Their guardianship extends to monitoring boat traffic, ensuring that vessels venture only where permitted, maintaining the sanctity of their protected zones. When necessary, they confront and repel those who threaten the area, whether the danger comes from individuals seeking to exploit the land's resources or from those who pose a threat to the local wildlife.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'High Risk Elites',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value:
                              'There is a type of fish that people really want and will risk coming to try and get. This fish only lives in the shore lines of Malatra. They travel in 1 large group and change locations every few days. There is an elite group of 12 Endlesin Glen that follow and protect it.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '5MxGe8lKvYivtdzNqirUbd',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:24:08.064Z',
                  updatedAt: '2024-05-10T19:00:13.298Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Endlesin Glen - LIFE AND LORE',
                  title: 'Life and Lore',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Social Ways',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              "The Endlesin Glen community is known for its vibrant social life and outgoing nature, with music deeply embedded in their culture. Many among them are talented musicians, and it's a common sight to find them gathered around a fire in the evenings, filling the air with melodies and songs.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Resting Preferences',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'When it comes to resting for the night, the Endlesin Glen have a unique preference for sleeping in small trenches they dig on sandy beaches, about a foot deep, which offer them comfort and a sense of security. The proximity to water is not just a matter of preference but a strategic choice, allowing them a swift escape route if needed. In the absence of sandy shores, they adapt by sleeping directly on the jungle floor, though the beach remains their favored spot for its tranquility and the safety it provides.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '2SbstDPKSjM84jMJiBOsuQ',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:26:33.622Z',
                  updatedAt: '2024-05-10T15:57:55.350Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Endlesin Glen - TYPICAL WEARABLE: AS HIROS',
                  title: 'Typical Wearable: As Hiros',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Clothing',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'The Endlesin Glen adopt a minimalist approach to clothing, opting for garments that cover only the essentials to maintain modesty while facilitating their aquatic lifestyle. Embracing the resources offered by their marine environment, they craft their attire from materials sourced directly from the sea. This includes algae and the skins of large sea creatures they harvest for sustenance, selecting materials that are not only lightweight but also minimize drag and resistance in water.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Tansporting goods',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Crafting & Repairable',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Weapons',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Their arsenal predominantly features two-handed weapons, while others favor the adaptability of dual-wielding one-handed weapons. This selection of weaponry underscores their approach to combat—direct, forceful, and resolute.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Sea Shell Horn',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-3',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Among the specialized tools of the Gwanos Hemp, sea shell horns, crafted from conches, hold a unique place. These conches are divided into two categories based on their sound: the deeper, larger ones known as ferchs, and the narrower, sharper sounding ones.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Ferchs play a crucial role in long-distance communication among the Hiros. Their deep frequencies penetrate the water, reaching Endlesin Glen effortlessly, which makes them indispensable for signalling across vast stretches of ocean. Only the ferchs, with their resonant tones, are used for communication; other sea shell horns are employed as musical instruments and are not as widely distributed.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'The communication signals of the ferchs are as follows:',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            content: [
                              {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    marks: [],
                                    value:
                                      'A single, prolonged tone signals that the Endlesin Glen or a group thereof is initiating an attack.',
                                    nodeType: 'text',
                                  },
                                ],
                                nodeType: 'paragraph',
                              },
                            ],
                            nodeType: 'list-item',
                          },
                          {
                            data: {},
                            content: [
                              {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    marks: [],
                                    value: 'A sequence of multiple long tones, indicates the conclusion of an attack.',
                                    nodeType: 'text',
                                  },
                                ],
                                nodeType: 'paragraph',
                              },
                            ],
                            nodeType: 'list-item',
                          },
                          {
                            data: {},
                            content: [
                              {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    marks: [],
                                    value:
                                      'Two short tones followed by a long one, repeated, alert the Amro Hôm to approach and manage the transfer of captives.',
                                    nodeType: 'text',
                                  },
                                ],
                                nodeType: 'paragraph',
                              },
                            ],
                            nodeType: 'list-item',
                          },
                          {
                            data: {},
                            content: [
                              {
                                data: {},
                                content: [
                                  {
                                    data: {},
                                    marks: [],
                                    value: 'A series of rapid, short tones is a call for immediate assistance.',
                                    nodeType: 'text',
                                  },
                                ],
                                nodeType: 'paragraph',
                              },
                            ],
                            nodeType: 'list-item',
                          },
                        ],
                        nodeType: 'unordered-list',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'Occasionally, a brief, solitary sound from a ferch may be heard; this is usually an Endlesin Glen testing a new ferch or demonstrating its sound to another. Such solitary, short sounds are generally disregarded by the community.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value:
                              'The sea shell horns designated for musical purposes are meticulously crafted with additional holes. These holes are created by using thin, hard wood sourced from a notably resilient tree species. The artisans spin the wood by placing it between their palms and rubbing their hands back and forth, a technique requiring patience and skill. The process is time-consuming and the resulting tone of each instrument is somewhat unpredictable, adding a unique character to every piece.',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '2lcrchvL2aCsyf4jSFj0w3',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:27:02.680Z',
                  updatedAt: '2024-05-10T19:00:43.708Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Endlesin Glen - COMBAT',
                  title: 'Combat',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Combative Style',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "In matters of conflict, the Endlesin Glen embody the spirit of warriors, often showcasing a fierce temperament that's particularly pronounced in the heat of battle. While they may generally appear affable, their disposition can shift towards a more volatile temper under duress, driving them to fight with a passion that sometimes blurs the lines between instinct and strategy. This emotional intensity can make them formidable opponents, as their combat is fueled by raw feeling as much as by skill.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'heading-3',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Tactics',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '2YiGJZCNczmHR8mZyewQHl',
                  type: 'Entry',
                  createdAt: '2024-05-06T19:27:42.349Z',
                  updatedAt: '2024-05-10T19:01:23.189Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Endlesin Glen - CAPTURE & RELEASE',
                  title: 'Capture & Release',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Handling Captures with Calculated Mercy',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-4',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Guidelines Regarding Captives',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'heading-4',
                      },
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: '',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: 'FlTtFdorTyajI7PurBQf6',
            type: 'Entry',
            createdAt: '2024-05-04T20:34:12.603Z',
            updatedAt: '2024-05-06T15:28:13.696Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 3,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'silencers',
            title: 'Silencers',
            articleType: 'Generic',
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '48CMsubqlA9HfPkOpURoAU',
                  type: 'Entry',
                  createdAt: '2024-05-04T20:33:54.301Z',
                  updatedAt: '2024-05-06T15:44:13.198Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 9,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Silencers - Content',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "The Silencers are part of a myth that includes a cautionary tale about the Malatra Jungle. According to the myth, Silencers are said to inhabit the jungle, making people hesitant to explore its depths. Often, those who do venture in do not return, suggesting something dangerous might be hidden within the dense forest. Theories about the Silencers vary, with some suggesting they hunt in the jungle for food, while others believe that factors like a person's religion, race, or purity of heart might affect their fate. Despite the different explanations offered by various towns, the shared advice remains clear: it's best to avoid going too deep into the Malatra Jungle.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              "To prevent adventurers and particularly young children from delving too deeply into the jungle, the locals residing in the towns along the northern border of Malatra devised a cautionary tale named “Beyond the Silence”. Originating from the communities nestled in Malatra's northern outskirts, the story was shared and passed down through the years. It has grown into a widely acknowledged warning about the risks of disappearing in dense areas. Over time, the message of the tale has broadened, cautioning children about the dangers of wandering too far from the safety of their homes.",
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'The original tale went as follows.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Within these organic proliferating walls.',
                            marks: [
                              {
                                type: 'italic',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Beyond the elder trees, caves, cliffs and waterfalls.',
                            marks: [
                              {
                                type: 'italic',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Where the sound is thought to be master balancers.',
                            marks: [
                              {
                                type: 'italic',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: 'Breathes the mystifying bloodline of Silencers.',
                            marks: [
                              {
                                type: 'italic',
                              },
                            ],
                            data: {},
                          },
                        ],
                      },
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value: '',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
            tags: ['Placeholder'],
          },
        },
        {
          metadata: {
            tags: [],
          },
          sys: {
            space: {
              sys: {
                type: 'Link',
                linkType: 'Space',
                id: '5kn4tnxc24n7',
              },
            },
            id: '2UkrroX1itiHKv8rOx1Vhc',
            type: 'Entry',
            createdAt: '2024-05-04T20:30:31.320Z',
            updatedAt: '2024-05-04T20:36:18.271Z',
            environment: {
              sys: {
                id: 'master',
                type: 'Link',
                linkType: 'Environment',
              },
            },
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'article',
              },
            },
            locale: 'en-US',
          },
          fields: {
            slug: 'unity-race',
            title: 'Unity Race',
            articleType: 'Generic',
            content: [
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '4a584DIyHA9qVSIEqYacUR',
                  type: 'Entry',
                  createdAt: '2024-05-04T20:30:27.021Z',
                  updatedAt: '2024-05-04T20:36:39.010Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Unity - Intro',
                  content: {
                    data: {},
                    content: [
                      {
                        data: {},
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'Unity is a race of ancient gnomes dwelling within the mysterious ',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'Malatra',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [],
                            value:
                              " Jungle. Their existence remains largely unknown to the outside world, as they seldom venture beyond the jungle's bounds. On the rare occasions they do leave, they conceal their identities to avoid attracting attention to themselves or Malatra. Their primary mission is to safeguard the jungle's ecosystem, home to the ",
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            value: 'Eternal Roots',
                            nodeType: 'text',
                          },
                          {
                            data: {},
                            marks: [],
                            value:
                              ", which they patrol without fully understanding its significance. They enforce balance throughout the dense jungle and its coastlines, motivated by their belief in the significant and crucial magic that radiates from the land they vigilantly protect. This magic is believed to stem from Malatra's vibrant ecosystem, possessing the unique ability to enhance plant growth globally. With this knowledge, they embraced the duty to safeguard this sacred land by any means necessary, ensuring its powers continue to nourish life across the planet.",
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'paragraph',
                      },
                    ],
                    nodeType: 'document',
                  },
                },
              },
              {
                metadata: {
                  tags: [],
                },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: '5kn4tnxc24n7',
                    },
                  },
                  id: '22LsoOVHAIbNkg34moEYyZ',
                  type: 'Entry',
                  createdAt: '2024-05-04T20:31:13.635Z',
                  updatedAt: '2024-05-10T19:01:54.019Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 5,
                  contentType: {
                    sys: {
                      type: 'Link',
                      linkType: 'ContentType',
                      id: 'contentSection',
                    },
                  },
                  locale: 'en-US',
                },
                fields: {
                  entryTitle: 'Unity - Name Origin',
                  title: 'Name Origin',
                  content: {
                    nodeType: 'document',
                    data: {},
                    content: [
                      {
                        nodeType: 'paragraph',
                        data: {},
                        content: [
                          {
                            nodeType: 'text',
                            value:
                              'The name "Unity" was assigned to them by the limited number of merchants granted access to ',
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value: 'Oundamahi',
                            marks: [
                              {
                                type: 'underline',
                              },
                            ],
                            data: {},
                          },
                          {
                            nodeType: 'text',
                            value:
                              ", inspired by observing their collective and harmonious culture. Outside of these merchants, the wider world remained largely unaware of their existence, with most people only familiar with Unity through tales, legends, and myths surrounding Malatra. The Dwarvish settlement along Malatra's northern border, wary of the jungle's dangers and the enigmatic presence within, referred to them as the ",
                            marks: [],
                            data: {},
                          },
                          {
                            nodeType: 'hyperlink',
                            data: {
                              uri: 'silencers',
                            },
                            content: [
                              {
                                nodeType: 'text',
                                value: 'Silencers',
                                marks: [],
                                data: {},
                              },
                            ],
                          },
                          {
                            nodeType: 'text',
                            value: ', highlighting the peril and mystery of venturing too deep into their domain.',
                            marks: [],
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            ],
            tags: ['Placeholder'],
          },
        },
      ],
    },
    status
  );
};
