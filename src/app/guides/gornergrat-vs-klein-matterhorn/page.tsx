import Link from 'next/link';
import GuideLayout, {
  GuideFaq,
  GuideTable,
  GuideVerdict,
  GuideVerdictGrid,
  LiveConditionCallout,
} from '@/components/GuideLayout';
import { PLANNING_GUIDE_UPDATED, planningGuideMetadata } from '@/lib/planning-guides';
import { buildStaticGuideJsonLd } from '@/lib/schema';

export const revalidate = 900;

const PATH = '/guides/gornergrat-vs-klein-matterhorn';
const TITLE =
  'Gornergrat vs. Klein Matterhorn: Which Viewpoint is Best? (Visibility & Cost Guide)';
const DESCRIPTION =
  "Compare Gornergrat (3,089m) and Klein Matterhorn Glacier Paradise (3,883m). Angle differences, ticket prices, summit cloud sensitivity, and which to choose based on today's weather.";

const FAQS = [
  {
    question: 'Can you do both Gornergrat and Klein Matterhorn in one day?',
    answer:
      'Yes, when both morning scores are high. Ride Gornergrat first for light on the east face, then cross the village to the Matterhorn Express for Klein Matterhorn later in the day. A day trip from Zurich or Geneva does not leave enough time to do both well — pick Gornergrat. The cableway to 3,883 m also stops before the cogwheel when south Föhn winds get strong.',
  },
  {
    question: 'Which viewpoint is cheaper with the Swiss Travel Pass?',
    answer:
      'Gornergrat. The Swiss Travel Pass and the Half-Fare Card take 50% off both mountain tickets, and neither ride is included for free. Gornergrat’s full return fare is usually lower than the Klein Matterhorn cableway, so the discounted Gornergrat ticket stays the cheaper of the two. Buy it the morning you travel, after the east and south scores are in.',
  },
];

export const metadata = planningGuideMetadata(TITLE, DESCRIPTION, PATH);

export default function GornergratVsKleinMatterhornPage() {
  const jsonLd = buildStaticGuideJsonLd({
    path: PATH,
    headline: TITLE,
    description: DESCRIPTION,
    breadcrumb: 'Gornergrat vs. Klein Matterhorn',
    datePublished: PLANNING_GUIDE_UPDATED,
    dateModified: PLANNING_GUIDE_UPDATED,
    faqs: FAQS,
  });

  return (
    <GuideLayout
      path={PATH}
      breadcrumb="Gornergrat vs. Klein Matterhorn"
      title={TITLE}
      description={DESCRIPTION}
      jsonLd={jsonLd}
    >
      <h2>Quick verdict</h2>
      <GuideVerdictGrid>
        <GuideVerdict tone="emerald" label="Choose Gornergrat">
          Choose Gornergrat if you want the classic postcard east / north-east pyramid, the
          open-air cogwheel train, or the Riffelsee reflection hike.
        </GuideVerdict>
        <GuideVerdict tone="amber" label="Choose Klein Matterhorn">
          Choose Klein Matterhorn if you want maximum altitude (3,883 m), year-round snow and the
          glacier palace, or the dramatic south-crest view into Italy.
        </GuideVerdict>
      </GuideVerdictGrid>

      <LiveConditionCallout mode="viewpoints" />

      <h2>Direct comparison</h2>
      <p>
        Gornergrat and Klein Matterhorn (Matterhorn Glacier Paradise) face different sides of the
        same peak. The{' '}
        <Link href="/#viewpoint-toggle">homepage viewpoint toggle</Link> scores them separately
        because one can be clear while the other is in cloud.
      </p>
      <GuideTable
        caption="Gornergrat vs. Klein Matterhorn"
        headers={['', 'Gornergrat', 'Klein Matterhorn']}
        rows={[
          ['Elevation', '3,089 m', '3,883 m'],
          [
            'Transit type',
            'Open-air cogwheel train, about 33 minutes from Zermatt',
            'Gondola and cable car via Furi and Trockener Steg, about 45 minutes',
          ],
          [
            'Roundtrip cost (CHF)',
            'Typical adult return about CHF 100–135 before discounts. Swiss Travel Pass or Half-Fare is about half of that.',
            'Usually higher, often about CHF 140–220 return before the same 50% pass discount. Confirm the day’s fare at the station.',
          ],
          [
            'View angle of the peak',
            'Classic east / north-east pyramid along the Hörnli ridge',
            'South crest, looking across toward Italy',
          ],
          [
            'Low valley fog vs. high ridge wind',
            'The climb can still be in valley fog. The cogwheel keeps running in wind that stops the cable car, and the east face often stays clear in south Föhn.',
            'Often above a valley inversion. Socks in first when moist air spills over from the south, and the cableway closes in high ridge wind.',
          ],
          [
            'Best time of day',
            'Morning, about 06:00–11:00, for light on the east face',
            'Late morning into afternoon for the south side',
          ],
        ]}
      />

      <h2>Microclimate and cloud behavior</h2>
      <p>
        South Föhn pushes moist air up from the Italian side and over the Theodul Pass. That cloud
        reaches Klein Matterhorn, at 3,883 m on the border ridge, first. Gornergrat sits further
        east at 3,089 m, out of the first spill, and can stay in sun for another couple of hours
        while the south crest is already grey.
      </p>
      <p>
        The reverse pattern is a low valley inversion. Zermatt, and sometimes the lower Gornergrat
        approach, sits in fog while 3,883 m is already above the deck. A sunny morning in Zurich
        does not tell you which of those two is happening. Read the east score and the south score
        on the tracker, then buy the ticket.
      </p>
      <p>
        Ticket timing and the longer east-versus-south breakdown also live in the{' '}
        <Link href="/guides/gornergrat-vs-glacier-paradise">
          Gornergrat vs. Glacier Paradise field guide
        </Link>
        . If the reflection is the reason you picked Gornergrat, use the{' '}
        <Link href="/guides/riffelsee-lake-matterhorn-reflection-guide">Riffelsee guide</Link>{' '}
        before you leave Rotenboden.
      </p>

      <GuideFaq id="gornergrat-klein-faq" items={FAQS} />
    </GuideLayout>
  );
}
