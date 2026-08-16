import styles from './page.module.css';
import News from './components/News/News';
import NewsAggregations from './components/NewsAggregations/NewsAggregations';

interface SearchDocument {
  id: string;
  title: string;
  link: string;
  snippet?: string;
  source?: string;
  image?: string;
  model?: string;
  created_at?: string;
}

interface AggregationItem {
  key: string;
  count: number;
}

interface Aggregations {
  by_model: AggregationItem[];
  by_company: AggregationItem[];
}


interface SearchResponse {
  total: number;
  count: number;
  documents: SearchDocument[];
  aggregations: Aggregations;
}

async function getInitialResults(): Promise<SearchResponse> {
  console.log("Fetching initial results from API...");
  const res = await fetch(`${process.env.NEXT_PUBLIC_SEARCH_API_ENDPOINT}?size=25`, {
    next: { revalidate: 60 }, // cache for 60s, then revalidate in the background
  });

  if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
  const data: SearchResponse = await res.json();
  console.log("Initial results fetched:", data);
  return data;
}

export default async function HomePage() {
  const initialData = await getInitialResults();

  return (
    <main className={styles.container}>
      <div className={styles.page}>
        <div className={styles.aggColumn}>
          <NewsAggregations initialAggregations={initialData.aggregations} />
        </div>
        <div>
          <News
            initialDocuments={initialData.documents}
            initialTotal={initialData.total}
          />
        </div>
      </div>
    </main>
  );
}