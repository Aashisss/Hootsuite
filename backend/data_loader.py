import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

# Ensure NLTK data is downloaded
nltk.download("punkt")
nltk.download("stopwords")
nltk.download("wordnet")


def preprocess_text(text):
    # Tokenize text
    tokens = word_tokenize(text)

    # Remove stopwords
    tokens = [word for word in tokens if word.lower() not in stopwords.words("english")]

    # Lemmatize tokens
    lemmatizer = WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(token) for token in tokens]

    # Join tokens back to string
    return " ".join(tokens)


def load_and_preprocess_data(file_path):
    # Load the dataset
    data = pd.read_csv(file_path)

    # Preprocess the text data
    data["cleaned_text"] = data["text"].apply(preprocess_text)

    return data
