# Evaluation plan before a classifier can ship

## Define the claim

Research whether source-code patterns generalize to provenance under specific languages and tasks. Distinguish human-only, AI-only, mixed and unknown. Do not silently collapse mixed/unknown into binary labels. Provenance must come from documented collection history, not another detector. Human self-reports alone have limitations.

## Collect with permission

Use personally owned or appropriately licensed examples. Track sample ID, project ID, task family, language, provenance, license/permission, collection date and (for generated samples) model/version and prompt. Do not ingest secrets or personal data. Repository timestamps alone do not establish human authorship. Do not fabricate human examples by having AI imitate humans.

## Prevent leakage

Deduplicate exact and near-duplicate files before splitting. Split by repository and task family, not random lines; keep variants of the same task/code in one partition. Keep a final test set locked. Track generated model families and hold at least one out for generalization tests. Ensure language, task difficulty and length are not proxies for labels.

## Baselines

Compare majority-class prediction with a transparent regularized logistic regression using training-only fitted features. Select features and hyperparameters on training/validation data only. Consider stronger models only after baselines are documented. Feature weights do not establish causation or author identity.

## Evaluation

Report per-class precision and recall, confusion matrix, macro F1, support counts and human-to-AI false-positive rate. Include confidence intervals resampled by project, language/length/task slices, mixed-code results and robustness to formatting, comment removal and human editing. Never present the nine software tests as classifier accuracy.

## Uncertainty and abstention

Calibrate on validation data if a probability is to be shown. Choose abstention thresholds using a predeclared false-positive tolerance; document coverage versus error and reject unsupported languages or out-of-distribution inputs. Evaluate once on the held-out test set. Until then: verdict=insufficient_evidence, probability=null.

## Release gate

Publish collection permissions, dataset limitations, split strategy, baselines, failures, evaluated distribution, intended use and model card. An imperfect result is a valid research outcome. Never advertise universal AI detection or use the result as the sole basis for adverse decisions about people.
