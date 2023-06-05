# co3cc41988fd513f4276a9b12

Quick start:

```
$ npm install
$ npm start
````


Fine-tuning command lines
------------------------

Check python version:
        python3 --version
        
Check pip version:
        pip -- version

Install pip:
        python3 -m ensurepip --upgrade
        
Install the OpenAI CLI: 
        pip install --upgrade openai

Add our API key:
        export OPENAI_API_KEY="<OPENAI_API_KEY>"
        for example":
        export OPENAI_API_KEY="sdk-3344fnjsfknfwGDFR-34dhG"


To navigate to the folder holding the data, we use the cd (change directory) command:
        cd Documents/apps/we-wingit
        
Start the data preparation and use the -f flag to identify the file where our data is stored:
        openai tools fine_tunes.prepare_data -f <LOCAL_FILE>
        for example:
        openai tools fine_tunes.prepare_data -f we-wingit-data.csv
        
Install pandad:
         $ pip install openai pandas

To create a fine-tuned model
        openai api fine_tunes.create -t <TRAIN_FILE_ID_OR_PATH> -m <BASE_MODEL>
        for example:
        openai api fine_tunes.create -t we-wingit-data_prepared.jsonl -m davinci
        
To reconnect the stream (to check how the fine-tune is progressing or see if it has completed)
        openai api fine_tunes.follow -i <YOUR_FINE_TUNE_JOB_ID>
        for example:
        openai api fine_tunes.follow -i ft-bfubdoni4737dbsj


My fine tuning result: 

(base) admin@admins-Air data % openai api fine_tunes.follow -i ft-72GjutU274mb0cwrBtFjKAGA
[2023-06-05 11:47:31] Created fine-tune: ft-72GjutU274mb0cwrBtFjKAGA
[2023-06-05 11:48:50] Fine-tune costs $0.26
[2023-06-05 11:48:50] Fine-tune enqueued. Queue number: 0
[2023-06-05 11:48:51] Fine-tune started
[2023-06-05 11:51:05] Completed epoch 1/4
[2023-06-05 11:51:16] Completed epoch 2/4
[2023-06-05 11:51:28] Completed epoch 3/4
[2023-06-05 11:51:39] Completed epoch 4/4
[2023-06-05 11:52:16] Uploaded model: davinci:ft-personal-2023-06-05-02-52-15
[2023-06-05 11:52:17] Uploaded result file: file-S8qWsRtMY6CTIPgio9WupP79
[2023-06-05 11:52:17] Fine-tune succeeded

Job complete! Status: succeeded 🎉
Try out your fine-tuned model:

openai api completions.create -m davinci:ft-personal-2023-06-05-02-52-15 -p <YOUR_PROMPT>



To create a model with a higher n_epochs setting
        openai api fine_tunes.create -t we-wingit-data_prepared.jsonl -m davinci --n_epochs 16  


        (base) admin@admins-Air data % openai api fine_tunes.follow -i ft-MrZPp0cifFnuBffFOwvuQvK6
[2023-06-05 13:30:20] Created fine-tune: ft-MrZPp0cifFnuBffFOwvuQvK6
[2023-06-05 13:31:44] Fine-tune costs $1.04
[2023-06-05 13:31:44] Fine-tune enqueued. Queue number: 1
[2023-06-05 13:32:16] Fine-tune is in the queue. Queue number: 0
[2023-06-05 13:37:21] Fine-tune started
[2023-06-05 13:40:33] Completed epoch 1/16
[2023-06-05 13:40:45] Completed epoch 2/16
[2023-06-05 13:40:56] Completed epoch 3/16
[2023-06-05 13:41:08] Completed epoch 4/16
[2023-06-05 13:41:20] Completed epoch 5/16
[2023-06-05 13:41:31] Completed epoch 6/16
[2023-06-05 13:41:43] Completed epoch 7/16
[2023-06-05 13:41:54] Completed epoch 8/16
[2023-06-05 13:42:06] Completed epoch 9/16
[2023-06-05 13:42:17] Completed epoch 10/16
[2023-06-05 13:42:29] Completed epoch 11/16
[2023-06-05 13:42:40] Completed epoch 12/16
[2023-06-05 13:42:52] Completed epoch 13/16
[2023-06-05 13:43:03] Completed epoch 14/16
[2023-06-05 13:43:15] Completed epoch 15/16
[2023-06-05 13:43:26] Completed epoch 16/16
[2023-06-05 13:44:00] Uploaded model: davinci:ft-personal-2023-06-05-04-44-00
[2023-06-05 13:44:01] Uploaded result file: file-GFi1Y8wn6fyUzTVz2aVYIKGg
[2023-06-05 13:44:01] Fine-tune succeeded

Job complete! Status: succeeded 🎉
Try out your fine-tuned model:

openai api completions.create -m davinci:ft-personal-2023-06-05-04-44-00 -p <YOUR_PROMPT>