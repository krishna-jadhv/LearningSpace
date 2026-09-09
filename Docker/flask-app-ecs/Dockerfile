# Base OS

FROM python:3.13-slim

# Working Directories

WORKDIR /app

# COPY 

COPY . .

# Run

RUN pip install -r requirements.txt


# Expose port 80

EXPOSE 80

# serve the app / run the app (keep it running)

CMD ["python","run.py"]
