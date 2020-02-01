from flask import Flask, jsonify, request
from models import Exams

app = Flask(__name__)

exam_model = Exams()

@app.route('/topics')
def topics():
    exam_topics = exam_model.topics()
    new_exam_topics = []
    for t in exam_topics:
        new_exam_topics.append(t[0])
    return jsonify({'topics': new_exam_topics}), 201

@app.route('/questions', methods=['POST'])
def questions():
    req = request.get_json()
    topic = req['topic']
    topic_questions = exam_model.questions(topic)
    new_topic_questions = []
    for t in topic_questions:
        new_topic_questions.append(t[2])
    return jsonify({'questions': new_topic_questions}), 201


@app.route('/question', methods=['POST'])
def question():
    req = request.get_json()
    topic = req['topic']
    q = req['question']
    q_info = exam_model.question(topic, q)

    question_type = q_info[0][1]
    question_info = q_info[0][2]
    question_link = q_info[0][3]
    solution_link = q_info[0][4]
    video_link = q_info[0][5]

    return jsonify({'question_type': question_type,
                    'question_info': question_info,
                    'question_link': question_link,
                    'solution_link': solution_link,
                    'video_link': video_link}), 201
