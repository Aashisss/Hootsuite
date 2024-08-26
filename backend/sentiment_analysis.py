from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


def analyze_sentiment(data):
    analyzer = SentimentIntensityAnalyzer()

    def get_sentiment_label(compound_score):
        if compound_score >= 0.05:
            return "positive"
        elif compound_score <= -0.05:
            return "negative"
        else:
            return "neutral"

    # Analyze sentiment for each text
    data["vader_sentiment"] = data["cleaned_text"].apply(
        lambda x: analyzer.polarity_scores(x)
    )
    data["predicted_sentiment"] = data["vader_sentiment"].apply(
        lambda x: get_sentiment_label(x["compound"])
    )

    return data
